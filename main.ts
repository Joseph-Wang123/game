let mySprite: Sprite = null
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    ........................bbbbbbbbbbbbbbbbbbb..................................
    ......................bbb5555555555555555bbbbb...............................
    .....................bb5555555555555555555555bbb......bbc....................
    ....................bb5555555555555555555555555bbb..cbbcc....................
    ...................bbffffffffffffffff555555555555bccbbccc....................
    ...................bff55555555555555ffff55555555555ccccc.....................
    ..................bff55b555555555bd555fffffffffffff5cccc.....................
    ..................b5555b555555555bb55555ffffffff1ff55ccc.....................
    ..................c5555555555555555555555ffffff1fff555cc.....ccc.............
    ..................c55555bccccc555555555555ffcc1fff55555ccccccbbc.............
    ..................c5555bccccccccb5555555555ffffff5555555cccbbbcc.............
    ..................c555bddcccccccccb1555555555555555555555ccbccc..............
    ..................c555bcdcccccccccc11b55555555555555555555ccccc..............
    ...................c55ccbcccccccccc11cc5555555555555555555dcccc..............
    ...................c55ccccccccccccc1bccb1555555bb5555555555dcc...............
    ....................c5cccccccccccccccccb1155555b55555555555dcc...............
    ....................c55ccccccccccccccccc1bccccb555555555555ddc...............
    .....................c55cccccccccccccccccccccc555555555555dddccccbbc.........
    ......................c55ccccccb333cc333bcccc555555555555555ddccbbcc.........
    ......................cc55dccc3333bc333333ccb555555555555555ddcccccc.........
    .......................cc555c33333b3333333cc555555555555555dddccccc..........
    ........................ccb533333b33333333c5555555555555555d55dcccc..........
    .........................cb533333b3333333b55d55555555555555555dcccc..........
    .........................cd533333b33b133b55dd5555555555555555dddccc..........
    .................cccc....c5513333333b11355dd55555555555555ddddddcc...........
    ................c55bcc...c5513333333b1155dd5555555555555555dddddcc...........
    ................c55bbc...c5533333333b555dd55555555555555555ddddddccc.........
    ..............ccc55bddc..cb553133133555dd555555555cccc5555dddddddcccccc......
    .............c55bb5bdddc..c55513313555dd5555555555c55ccccddddddddcccccc......
    .............c55dbbbdddcc..cd5555555dbdd5555555555cb5555ccccdddddccccc.......
    .............c555bddbbb5c..cbbbbbbbbbddd5555555ccccbb55bb5dbcddddbccc........
    ..............bbbbddb555ccccddbbbbbddddd5555555c55ccbbbb5555bcddddcc.........
    .............cdd555b555bdbb5dddddddddddd5555555bb5555db5555555cdddc..........
    ...........ccbbb555bbbb5dbb5ddddddddddd555555555bb55ddbccbb555ccddcc.........
    ...........c555bb5555555bb555dd4444444d5555555555bc5ddddddbb555cdddcc........
    ...........c5555b5555555b5555222244444445555555555c55dddbbbb555cbdddc........
    ............cbbb555555dbb5552222222224444555555555cc5ddbb5555555bbbddc.......
    .............cbb55555ddb555222222222222445555555555c55db55555555dbbbdcc......
    ..............cccddddddb555222555222222244555555555cc555bbb555555dddddc......
    ................ccddddb55522252222222222445555555555c55555dd555555ddddc......
    .................cddddb5552252222255522244455555555dcc5555dd5555555dddc......
    ..cc.............ccddbd552225222225555522445555555d5dc555dd55555555dddc......
    ..c5bb............ccdbd5522252222225555224455555555ddcc555555555555dddc......
    ..c55b.............ccbd552225222222555552445555555ddddc555555555555ddcc......
    ..cb5bb.............cbdd5222255552255555244555555d5dddcc5555555555dddcc......
    ..cb55b..............cdd522222225555225524455555d55ddddccc5555555dddcc.......
    ..cb55b..............cddd222222225552222244d555d55dddddddccc555ddddcc........
    ..c555b..............cdd5222222255255222244555dddddddddddddcccccccccc.......3
    .cb555bb.............cbdd2222225522255224445dddddddddddddddddddddddccc.......
    .cb555bb............ccbdd222225522222552445555dddddddddddddddddddddcccc......
    .c55555b...........cccbbdd2225522222224444d55dddddddddddddddddddddbccc.......
    cb55555b..........cccbbbbd222222222224444dddddddddddddddddddddddddbcc........
    cb55555b........bccbbbd5555d2222222244445ddddddddddddddddd55ddddbbbc.........
    c5555555bb....bbbddbb5555555d224444444d55dddddddddddddddd55ddddddbbc.........
    c55555555bbbbbbddddc555555555dd44444ddddddddddddddddddddd5dd5555ddbc.........
    cd5555555555ddddddc5555555555ddddddddddddddddddddddddddddd55555555dc.........
    cd5555555555dddddcc5555555555dddddddddddddddddddddddddd55d555555555cc........
    cdd55555555ddddddc55555555555dddddddddddddddddddddddddd5555555555555c........
    cddd555555ddddddcc5555555555ddddddddddddddddddddddddddddd55555555555cc.......
    ccddddddddddddddc55555555555ddddddddddddddddddddddddddddd555555555555c.......
    .cddddddddddddddc555555555555dddddddddddddddddddddddddddd555555555555c.......
    .ccddddddddddddcc555555555555ddddddddddddddddddbddddddddd555555555555cc......
    ..ccdddddddddddcc5555555dd55dddddddddddddddddddbdddddddd5d555555555555c......
    ...ccddddddddddccd5555dddddddddddddbbddddddddddbddddddddd5555555555555c......
    ....cccddddddddcddddddddddddddddddbbddddddddddbbbdddddddddd55555555555c......
    ......cccdddddccdddddddddddddddddccccccccccccbbbbddddddddddd555555555dc......
    ........cccccccdddddddddddddddddccc........ccccbbbdddddddddddd5555555dcc.....
    ............ccc555555dddddddddccc.............cccbddddddddddddd55555ddccc....
    .............c55555555ddddddccc..................ccdddddddddddddddddddccc....
    ...........ccdddccd555dddccccc....................ccdddddddddddd5555555dc....
    ..........ccdddccdddddcddcc........................cccddddddddd55555555dcc...
    ..........ccdddcdddccccddc...........................ccccccdddd555ddddccddcc.
    ..........ccccccddcccccdcc...............................ccddddddccddddccddcc
    ...............cdc.....ccc................................cccccdddccddddcddcc
    ...............cc...........................................ccccdddccccdccccc
    ...............................................................ccccc..ccc....
    `, SpriteKind.Player)
