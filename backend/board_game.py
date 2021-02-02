import pandas as pd
from flask_restful import Resource, reqparse
from flask import jsonify, make_response

df = pd.read_csv('mlReadyData.csv')
df = df.iloc[:, :21]

# Boardgame
# Returns a single board game based on id
class Boardgame(Resource):
    def get(self, id):
        boardgame = df[df['id'] == id]
        return make_response(boardgame.to_json(orient='records'), 200)

# Boardgames
# Returns all board games matching args
class Boardgames(Resource):
    def get(self):
        parser = reqparse.RequestParser()

        parser.add_argument('cat', type=str, help='Categories to match', nullable=True, location='args', action='append', default=[])
        parser.add_argument('name', type=str, help='Name to match', nullable=True, location='args', action='store', default='')
        parser.add_argument('mech', type=str, help='Mechanics to match', nullable=True, location='args', action='append', default=[])
        parser.add_argument('min_rating', type=int, help='Minimum average rating', nullable=True, location='args', action='store', default=0)
        parser.add_argument('max_players', type=int, help='Minimum number of players', nullable=True, location='args', action='store', default=9999)
        parser.add_argument('max_time', type=int, help='Average playtime', nullable=True, location='args', action='store', default=9999)

        args = parser.parse_args()
        print(args)

        boardgames = df[df['category'].str.contains('|'.join(args['cat'])).any(level=0) &
           df['category'].str.contains('|'.join(args['cat'])).any(level=0) &
           df['names'].str.contains(args['name']) &
           df['avg_rating'].ge(args['min_rating']) &
           df['avg_time'].le(args['max_time']) &
           df['max_players'].le(args['max_players'])]

        return make_response(boardgames.to_json(orient='records'), 200)
