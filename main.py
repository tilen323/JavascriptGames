#!/usr/bin/env python
import os
import jinja2
import webapp2

from handlers.base import MainHandler
from handlers.code_player import CodePlayerHandler
from handlers.reaction_test import ReactionTestHandler
from handlers.ny_game import NyGameHandler, NyGameMenuHandler, NyGameEditorHandler, NyGameScoreHandler

app = webapp2.WSGIApplication([
    webapp2.Route('/', MainHandler, name="main-page"),
    webapp2.Route('/code-player', CodePlayerHandler, name="code-player"),
    webapp2.Route('/reaction-test', ReactionTestHandler, name="reaction-test"),
    webapp2.Route('/ny-game', NyGameHandler, name="ny-game"),
    webapp2.Route('/ny-game-menu', NyGameMenuHandler, name="ny-game-menu"),
    webapp2.Route('/ny-game-editor', NyGameEditorHandler, name="ny-game-editor"),
    webapp2.Route('/ny-game-score', NyGameScoreHandler, name="ny-game-score"),
], debug=True)
