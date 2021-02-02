from board_game import Boardgame, Boardgames

def initialize_routes(api):
    api.add_resource(Boardgames, '/boardgame')
    api.add_resource(Boardgame, '/boardgame/<int:id>')
