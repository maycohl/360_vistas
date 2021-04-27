(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -38.57,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_344EE739_133B_BA1B_41AC_AB490E50A7E8",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 147.97,
   "backwardYaw": 149.94,
   "distance": 1,
   "panorama": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "DORMITORIO NI\u00d1A 1201",
 "id": "panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA",
 "thumbnailUrl": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 139,
 "overlays": [
  "this.overlay_74DF845B_6C1C_4D4B_41D8_34EF52ACD755"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 141,
  "yaw": -41.5,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_37C24817_133B_B616_41A4_622F4351C3C0",
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 122,
  "yaw": 179.29,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_37E1F7EB_133B_BA3F_41A5_791453D088A0",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 102.86,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_3759B8D7_133B_B616_41B1_2848B1C913D1",
 "automaticZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 129.17,
   "backwardYaw": 171.21,
   "distance": 1,
   "panorama": "this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "BA\u00d1O PRINCIPAL 1201",
 "id": "panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44",
 "thumbnailUrl": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 135,
 "overlays": [
  "this.overlay_D4E86805_CC0F_E895_41D5_81A209D63596"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 133,
  "yaw": 70.47,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_37CBD809_133B_B5FB_4199_A7832B0E5987",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": -90.5,
  "pitch": 0
 },
 "id": "camera_378D985F_133B_B616_4188_8524453587C1",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PlayList",
 "items": [
  "this.PanoramaPlayListItem_3B8D8578_133B_BE19_41A1_94421E9D1165",
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_C539447A_C81D_B3A9_41E4_35662EC989DF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_31F7D699_137D_BA1B_4194_3C8AB767D613",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7",
   "camera": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 38.02,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_34580766_133B_BA29_41AC_B43B20E94115",
 "automaticZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 43.26,
   "backwardYaw": 84.62,
   "distance": 1,
   "panorama": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 171.21,
   "backwardYaw": 129.17,
   "distance": 1,
   "panorama": "this.panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "DORMITORIO PRINCIPAL 1201",
 "id": "panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E",
 "thumbnailUrl": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_62D24D5A_6D0F_8ED4_41D2_8EA790297809",
  "this.overlay_0F47D013_1364_75EE_418D_CD517DB9A253"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 136,
  "yaw": -32.03,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_37AD2835_133B_B62A_417D_2A1E279DE082",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "manualZoomSpeed": 5,
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 23,
  "yaw": -0.96,
  "pitch": -9.27
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -0.23,
    "yawSpeed": 0.02,
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 2.78,
    "yawSpeed": 0.02,
    "easing": "linear",
    "path": "shortest"
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 3.5,
    "yawSpeed": 0.02,
    "easing": "cubic_out",
    "path": "shortest"
   }
  ]
 },
 "id": "panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -159.99,
   "backwardYaw": 115.49,
   "distance": 1,
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "LAVANDERIA 607",
 "id": "panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7",
 "thumbnailUrl": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 140,
 "overlays": [
  "this.overlay_FE9B449F_EAF1_DD02_41E6_53D32922EA74"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_31F7D699_137D_BA1B_4194_3C8AB767D613",
 "thumbnailUrl": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_t.jpg",
 "pitch": 0,
 "label": "plazuela",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_31F7269A_137D_BA19_4177_E29054D4617C",
  "this.overlay_31F7369A_137D_BA19_41B1_8ECDEF22CEDE",
  "this.overlay_31F7069A_137D_BA19_4199_6AFE0CBF4B5B",
  "this.overlay_31F7669A_137D_BA19_4190_E62852C0FB84",
  "this.overlay_31F7769A_137D_BA19_41AA_F9FFF6986BB7",
  "this.overlay_31F7569A_137D_BA19_419D_592413305EAC",
  "this.overlay_31F4B69A_137D_BA19_4158_049ED4BBC114",
  "this.overlay_31F4E69A_137D_BA19_419D_44404C3EAE6C",
  "this.overlay_31F4F69B_137D_BA1F_41A2_EB4051CC023A"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_3764689D_133B_B61A_4168_ED7C818DCB95",
 "automaticZoomSpeed": 10
},
{
 "class": "Photo",
 "duration": 5000,
 "label": "LOBBY",
 "id": "album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9_0",
 "thumbnailUrl": "media/album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9_0_t.jpg",
 "width": 5000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9_0.jpg"
   }
  ]
 },
 "height": 2500
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": -1.51,
  "pitch": -3.99
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_camera",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": -82.2,
  "pitch": 0
 },
 "id": "camera_346B76FF_133B_BA17_4191_FC379359FA22",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 141,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_camera",
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -39.49,
  "pitch": 2.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_341FC7BF_133B_BA17_41A0_07FCE1A78C5A",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PhotoAlbum",
 "label": "Album de Fotos LOBBY",
 "id": "album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9",
 "thumbnailUrl": "media/album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9_t.png",
 "playList": "this.album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9_AlbumPlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 129,
  "yaw": -65.34,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_37B87851_133B_B66A_41A5_439C57EF5AE6",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 137,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_camera",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_camera",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -170.96,
   "backwardYaw": 7.62,
   "distance": 1,
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 38.44,
   "backwardYaw": -77.14,
   "distance": 1,
   "panorama": "this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 39.5,
   "backwardYaw": -77.14,
   "distance": 1,
   "panorama": "this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -161.98,
   "backwardYaw": 11,
   "distance": 1,
   "panorama": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "COCINA 1201",
 "id": "panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933",
 "thumbnailUrl": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 137,
 "overlays": [
  "this.overlay_7A38664E_6C74_4D4C_41CB_D59E47BBBC20",
  "this.overlay_74A81DD8_6C1C_5F54_41D3_24FE58A2E92E",
  "this.overlay_74A9239E_6C14_CBCC_41D9_A48D01593DE6",
  "this.overlay_AFEB06B1_BE29_5923_41DE_5244D7CCB860"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "COWORKING",
 "id": "panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF",
 "thumbnailUrl": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 145,
 "overlays": [
  "this.overlay_F2E8C2C3_EB31_3501_41D5_8375A4D3D2CA",
  "this.overlay_F1090237_EB33_5502_41EA_729358860A63",
  "this.overlay_F108E775_EB37_FB06_41E9_289F4ADD97AC",
  "this.overlay_F429BA47_EAF2_F502_41C8_EC3AE8D9B669",
  "this.overlay_F490E7EC_EAF3_5B06_41EB_E107F9BDAC3B",
  "this.overlay_F4794F52_EAF1_2B02_41B8_B98F09505770",
  "this.overlay_0DE206EF_111F_BA36_4190_34919000FC2A",
  "this.overlay_0F4A524B_1364_FA7F_41B0_C5C5E2D88BC5"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 20.01,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_345E8756_133B_BA69_41A3_248B3EE0B43F",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 1.03,
  "pitch": 3.32
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_camera",
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -136.74,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_37F697FA_133B_BA19_419B_69796129584C",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "playList_3BA38568_133B_BE39_41A1_E175D69D7AC4"
},
{
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_rotation"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.71,
   "backwardYaw": -174.89,
   "distance": 1,
   "panorama": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 7.62,
   "backwardYaw": -170.96,
   "distance": 1,
   "panorama": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.26,
   "backwardYaw": -141.02,
   "distance": 1,
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6",
 "thumbnailUrl": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_t.jpg",
 "pitch": 0,
 "label": "SALA 1201",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 122,
 "overlays": [
  "this.overlay_605CE276_6D0A_9ADF_41B5_1C25210B90E0",
  "this.overlay_605F1276_6D0A_9ADF_41C1_8A6F5419B52D",
  "this.overlay_605F0276_6D0A_9ADF_41BF_8EE9C85DDAAB",
  "this.overlay_605F3276_6D0A_9ADF_41D0_D8371D8168AD",
  "this.overlay_605F2276_6D0A_9ADF_41D2_63212E0558FE",
  "this.overlay_0D364E2B_11EB_8A3F_41AA_2722DBF01AD2",
  "this.overlay_0A2E190C_11E5_F7F9_41A8_EAECB2460143",
  "this.overlay_0C8E84E6_11EC_BE29_419B_BA3D4B9F33E2",
  "this.overlay_0DFA2807_11EF_B5F7_41AC_F0FE9A06FBE5"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 137,
  "yaw": 0.66,
  "pitch": 0.64
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_camera",
 "manualRotationSpeed": 408,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -81.31,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_3784386F_133B_B636_41AE_2C2CBA74FE08",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": -60.85,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_3450D775_133B_BA2B_41B0_EED308F35F60",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 102.86,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_374568C8_133B_B67A_41A8_7B130AC55B0D",
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 136,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_camera",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 137,
  "yaw": -141.56,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_37EB77DC_133B_BA19_41AC_6A1064706C80",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_camera",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 137,
  "yaw": 52.92,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_343F4794_133B_BAE9_419E_2628C6656606",
 "manualRotationSpeed": 408,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_37314912_133B_B7EE_41A8_DE246B71D244",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_BF2C9A17_EED2_F502_41B0_209AA8501663",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_C539447A_C81D_B3A9_41E4_35662EC989DF",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_31F7D699_137D_BA1B_4194_3C8AB767D613",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 21, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_camera"
  }
 ],
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist"
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_camera",
 "automaticZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_31F7D699_137D_BA1B_4194_3C8AB767D613"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "plazuela2",
 "id": "panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7",
 "thumbnailUrl": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 137,
 "overlays": [
  "this.overlay_0E746D34_137C_8E2A_41B1_41FE8C15F1FE",
  "this.overlay_0E749D34_137C_8E10_41A8_977BF3D8D601",
  "this.overlay_0E749D3A_137C_8E1E_419C_B041A35F6842",
  "this.overlay_0E74BD3A_137C_8E1E_41A1_4B9C2B271AA0",
  "this.overlay_0E74DD3A_137C_8E1E_417A_8E444ACCBE4A",
  "this.overlay_0E74FD3A_137C_8E1E_4198_2A246C67D223",
  "this.overlay_0E731D3A_137C_8E1E_41AE_96079A8E9344",
  "this.overlay_0E730D3A_137C_8E1E_41AE_C14985A39301",
  "this.overlay_0E733D3B_137C_8E1E_419A_01318BBB5DA4",
  "this.overlay_0E732D3B_137C_8E1E_4165_ED2B285330DE",
  "this.overlay_0E737D3B_137C_8E1E_419E_0DAF2E809B72"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -38.57,
  "pitch": -0.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_3446B748_133B_BA79_419F_D7CD74DEBFFA",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -109.53,
   "backwardYaw": 98.69,
   "distance": 1,
   "panorama": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "DORMITORIO NI\u00d1O 1201",
 "id": "panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D",
 "thumbnailUrl": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 133,
 "overlays": [
  "this.overlay_74A3E056_6C1C_C55C_41D0_57D95575C25D"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": -6.47,
  "pitch": -0.49
 },
 "id": "panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_camera",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 133,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_camera",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -141.02,
   "backwardYaw": -0.26,
   "distance": 1,
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -121.32,
   "backwardYaw": -0.26,
   "distance": 1,
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 115.49,
   "backwardYaw": -159.99,
   "distance": 1,
   "panorama": "this.panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 74.03,
   "backwardYaw": -141.98,
   "distance": 1,
   "panorama": "this.panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 97.8,
   "backwardYaw": 119.15,
   "distance": 1,
   "panorama": "this.panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 89.5,
   "backwardYaw": -38.87,
   "distance": 1,
   "panorama": "this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 82.29,
   "backwardYaw": -127.08,
   "distance": 1,
   "panorama": "this.panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "SALA 607",
 "id": "panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2",
 "thumbnailUrl": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 125,
 "overlays": [
  "this.overlay_0EFA37DC_1324_9A19_419B_BFBE37290535",
  "this.overlay_0EFA27DC_1324_9A19_41A0_9253710EAB90",
  "this.overlay_0EFA17DC_1324_9A19_41AC_59D8B02E0BC7",
  "this.overlay_0EFA07DC_1324_9A19_4184_005143898131",
  "this.overlay_0EFA77DC_1324_9A19_4187_A358211E1AC0",
  "this.overlay_0EFA67DD_1324_9A1B_41A4_17695111D3E1",
  "this.overlay_0EFA57DD_1324_9A1B_419C_0B156B71864F",
  "this.overlay_0EFA47DD_1324_9A1B_41AF_EAEE24240DFE",
  "this.overlay_0EFAA7DD_1324_9A1B_41AF_924BD718935B"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 122,
  "yaw": -172.38,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_374E88BA_133B_B61E_41A1_BB9BA0847E88",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": 38.98,
  "pitch": 0
 },
 "id": "camera_34A33689_133B_BAFA_4176_5323434349BA",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -127.08,
   "backwardYaw": 82.29,
   "distance": 1,
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "ESTUDIO 607",
 "id": "panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA",
 "thumbnailUrl": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 137,
 "overlays": [
  "this.overlay_DE20EF16_CCFA_68B6_41E4_B3CFA4D26429"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 114.66,
   "backwardYaw": -129.5,
   "distance": 1,
   "panorama": "this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "BA\u00d1O PRINCIPAL 607",
 "id": "panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA",
 "thumbnailUrl": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DC81D5D1_CC0A_3B8A_41C3_D2962D0C6F54"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 126,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_camera",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -174.89,
   "backwardYaw": -0.71,
   "distance": 1,
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 84.62,
   "backwardYaw": 43.26,
   "distance": 1,
   "panorama": "this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 98.69,
   "backwardYaw": -109.53,
   "distance": 1,
   "panorama": "this.panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 74.56,
   "backwardYaw": 138.5,
   "distance": 1,
   "panorama": "this.panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 11,
   "backwardYaw": -161.98,
   "distance": 1,
   "panorama": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 149.94,
   "backwardYaw": 147.97,
   "distance": 1,
   "panorama": "this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "COMEDOR 1201",
 "id": "panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E",
 "thumbnailUrl": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_61B0E27C_6D0A_FAD3_41A6_A95CAF5B9EE4",
  "this.overlay_61B0F27C_6D0A_FAD3_41D5_0B44D94F15EB",
  "this.overlay_61B0A27C_6D0A_FAD3_41DA_8EA44259938C",
  "this.overlay_61B0B27C_6D0A_FAD3_41D7_309E6EDAA255",
  "this.overlay_61B1427C_6D0A_FAD3_41B5_667A266A3970",
  "this.overlay_61B1527C_6D0A_FAD3_41D4_96906BD59629",
  "this.overlay_C3EBCEE1_CC0A_698A_41E7_C37F5D364E5E",
  "this.overlay_0AE93DFB_111C_8E1F_4163_3D9C87D7A5D8",
  "this.overlay_0ACC2FDA_1164_8A1E_41A7_11729B614BDB",
  "this.overlay_0C2431F5_11EC_962A_41AD_47EFA1318B20",
  "this.overlay_0C927CE9_11E4_8E3B_41A5_D7522ECAE055"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 5.11,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_34AFA66C_133B_BA3A_4191_7638CF8DD6E2",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 122,
  "yaw": 179.74,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_347D771C_133B_BA19_41A6_301D07AA1815",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -169,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_375038E6_133B_B636_4199_AC2ADD1EB52D",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  }
 ],
 "hfov": 30,
 "partial": true,
 "id": "panorama_BF2C9A17_EED2_F502_41B0_209AA8501663",
 "thumbnailUrl": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_t.jpg",
 "pitch": 0,
 "label": "EXTERIOR",
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 9728,
      "rowCount": 19,
      "tags": "ondemand",
      "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0/f/0/{row}_{column}.jpg",
      "colCount": 19,
      "height": 9728
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 5120,
      "rowCount": 10,
      "tags": "ondemand",
      "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0/f/1/{row}_{column}.jpg",
      "colCount": 10,
      "height": 5120
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0/f/2/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0/f/3/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0/f/4/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0/f/5/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_t.jpg"
  }
 ],
 "vfov": 30,
 "hfovMax": 45.67,
 "overlays": [
  "this.overlay_BF2C8A18_EED2_F50E_41E2_83692CEFCD47"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 137,
  "yaw": 18.02,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_37D75826_133B_B636_4175_133418A1910C",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 119.15,
   "backwardYaw": 97.8,
   "distance": 1,
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "BA\u00d1O SECUNDARIO 607",
 "id": "panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198",
 "thumbnailUrl": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 132,
 "overlays": [
  "this.overlay_DB907139_CC0A_D8FD_41C7_EA0DABB5858C"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -31.22,
  "pitch": -0.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_372578F5_133B_B62A_41A4_3C8B7024B452",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": -97.71,
  "pitch": 0
 },
 "id": "camera_37A37843_133B_B66E_4194_ABAFA411261E",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -41.33,
  "pitch": -0.92
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_34D4065C_133B_BA1A_4182_1ABEE281FFC1",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -37.65,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_373BC904_133B_B7EA_41B0_4F43353ED5D5",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_376F188E_133B_B6F6_4180_D636FA23D200",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_camera",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.43,
  "pitch": -5.51
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_3463D70D_133B_BBFB_4132_2F55BE4F6A16",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": -105.97,
  "pitch": 0
 },
 "id": "camera_348EA6AF_133B_BA37_41A4_2678A9A0ADD8",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": -157.96,
  "pitch": 3.67
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_3799687F_133B_B616_41AB_A04003B61FFB",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "SUM",
 "id": "panorama_C539447A_C81D_B3A9_41E4_35662EC989DF",
 "thumbnailUrl": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 133,
 "overlays": [
  "this.overlay_D7F56A71_CC16_688A_41D8_402CB7403AA7",
  "this.overlay_F1DBA1DD_EB31_5706_41E0_FB1583A76B81",
  "this.overlay_F04A9C89_EB57_2D0E_41D3_E7D77A83DA0E",
  "this.overlay_CA6176D5_EAFF_7D06_41EA_11D155BBAE17",
  "this.overlay_CB8674F5_EAFF_3D06_41E6_B6D74C5734B9",
  "this.overlay_CAC4D938_EAFF_370E_41E5_7BECEF82DCCC"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 138.5,
   "backwardYaw": 74.56,
   "distance": 1,
   "panorama": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "BA\u00d1O SECUNDARIO 1201",
 "id": "panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10",
 "thumbnailUrl": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 143,
 "overlays": [
  "this.overlay_D5749469_CDFA_589A_41D2_F5BBB7F7B06C"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -129.5,
   "backwardYaw": 114.66,
   "distance": 1,
   "panorama": "this.panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -38.87,
   "backwardYaw": 89.5,
   "distance": 1,
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "DORMITORIO 607",
 "id": "panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965",
 "thumbnailUrl": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 132,
 "overlays": [
  "this.overlay_DE1CD06B_CC1F_D89D_41E5_93ABBC9AD6C4",
  "this.overlay_DDA5C3B9_CC1E_5FFD_41CD_B2290496D441"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -8.79,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_349886DE_133B_BA19_419B_16B65AE21972",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -77.14,
   "backwardYaw": 38.44,
   "distance": 1,
   "panorama": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -80.94,
   "backwardYaw": 38.44,
   "distance": 1,
   "panorama": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "LAVANDERIA 1201",
 "id": "panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834",
 "thumbnailUrl": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 131,
 "overlays": [
  "this.overlay_7A5B32AB_6C14_C5F4_41BC_EF28F0DCE2F4",
  "this.overlay_DC94E2CA_CC36_399E_41B7_A2832A86E97D"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -2.87,
  "pitch": -2.25
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_camera",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
 "buttonNext": "this.IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2"
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 137,
  "yaw": 9.04,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_34A9967B_133B_BA1E_41AC_715A18CB805A",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -105.44,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_3492F6EE_133B_BA39_4168_A73BE388447A",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -95.38,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_348756BF_133B_BA17_4159_62627A1414F6",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C539447A_C81D_B3A9_41E4_35662EC989DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C539447A_C81D_B3A9_41E4_35662EC989DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "LOBBY",
 "id": "panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2",
 "thumbnailUrl": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 134,
 "overlays": [
  "this.overlay_0E544854_11E4_B669_41A8_81868A70226D",
  "this.overlay_0E540854_11E4_B669_416A_FD494E759662",
  "this.overlay_0E541854_11E4_B669_419A_CAA0EDBFE482",
  "this.overlay_0E54C855_11E4_B66B_41AA_566ED8BFA86D",
  "this.overlay_0E54A855_11E4_B66B_4196_AA093E64A598",
  "this.overlay_0E548855_11E4_B66B_417D_40F119C223E2",
  "this.overlay_0E549855_11E4_B66B_41A9_51724539E692",
  "this.overlay_0E556855_11E4_B66B_41A8_F39C43434AEA",
  "this.overlay_0E557855_11E4_B66B_419E_D491435D6598",
  "this.overlay_0E555855_11E4_B66B_41A5_13BD4D03F8C2",
  "this.overlay_0E553855_11E4_B66B_4195_7743E73AB6CD",
  "this.overlay_0E55F855_11E4_B66B_41A5_5DA441414ACD",
  "this.overlay_0E55D855_11E4_B66B_4199_C582EC17585D",
  "this.overlay_0E55B856_11E4_B669_41A5_44FDAFC7304E"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_camera",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": -64.51,
  "pitch": 0
 },
 "id": "camera_3779B8AB_133B_B63E_41A8_74E218E42306",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -141.98,
   "backwardYaw": 74.03,
   "distance": 1,
   "panorama": "this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "COCINA 607",
 "id": "panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C",
 "thumbnailUrl": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 137,
 "overlays": [
  "this.overlay_F9F57609_EAF1_7D0E_41BC_902E1B353526",
  "this.overlay_FEEAA098_EAFE_D50E_41E7_2F6A9CA4D688"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 136,
  "yaw": -98.27,
  "pitch": -7.35
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_34BDD690_133B_BAE9_41A7_74573B55DA4E",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -38.57,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_340AC7B1_133B_BA2B_4184_8998943DDAE0",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 129,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_camera",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 122,
  "yaw": 179.74,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_3475072A_133B_BA3E_4192_17A63EF7D8CF",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 133,
  "yaw": 90.98,
  "pitch": -1.86
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_camera",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 122,
  "yaw": -2.59,
  "pitch": -0.65
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_camera",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 126,
  "yaw": 50.5,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_34B646A0_133B_BA29_41B1_78C60397C632",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 137,
  "yaw": -141.56,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_341647CE_133B_BA79_41A0_29195C0BD83C",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -30.06,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_343447A2_133B_BA29_4188_03C681136897",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": 15.61,
  "pitch": -24.8
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_37059921_133B_B62A_4174_385209C65B08",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_camera",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 126,
  "yaw": 141.13,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_342A4785_133B_BAEB_41A5_73ED459A3106",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 0,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 133,
  "yaw": -50.83,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_3480B6CF_133B_BA77_4160_3C192BD67A33",
 "manualRotationSpeed": 400,
 "automaticZoomSpeed": 0
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 50,
 "class": "ViewerArea",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_691B6C80_7506_9D4B_41B4_89FD1E7BCC23",
 "left": "0%",
 "shadow": false,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "width": 330,
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "--- LEFT PANEL 5"
 },
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "shadow": false,
 "right": "0%",
 "width": 115.05,
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 641,
 "paddingBottom": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_6ECE8198_4F7D_CE0F_41B6_C7C8D7E8FF58",
  "this.Container_6EC9F199_4F7D_CE01_41C8_1A8AEA0A382B"
 ],
 "id": "Container_6EC9D199_4F7D_CE01_41CD_90869FADC821",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, false, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "---INFO photo"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB"
 ],
 "id": "Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "---PANORAMA LIST"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
  "this.Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F"
 ],
 "id": "Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "---LOCATION"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73"
 ],
 "id": "Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "---PHOTOALBUM"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_6FD227C1_4F7F_B27E_41A4_4340D943D7A5"
 ],
 "id": "Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "---FLOORPLAN"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_17522AC5_57D1_805F_41CA_96B265C364E4",
  "this.Container_17516AC5_57D1_805F_41CA_8E754787B1A2"
 ],
 "id": "Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, false, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--REALTOR"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "shadow": false,
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "shadow": false,
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "SALA COMEDOR\u000a",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E, this.camera_343447A2_133B_BA29_4188_03C681136897); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.77,
   "image": "this.AnimatedImageResource_E82B7F21_F018_F1FD_4189_5DD4BE2C25BE",
   "pitch": -4.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 147.97,
   "distance": 100
  }
 ],
 "id": "overlay_74DF845B_6C1C_4D4B_41D8_34EF52ACD755",
 "data": {
  "label": "SALA COMEDOR"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.77,
   "yaw": 147.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.12
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "DORMITORIO PRINCIPAL",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E, this.camera_349886DE_133B_BA19_419B_16B65AE21972); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.4,
   "image": "this.AnimatedImageResource_E8D4CF21_F018_F1FD_41E5_8DCC81B00E78",
   "pitch": -0.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 129.17,
   "distance": 100
  }
 ],
 "id": "overlay_D4E86805_CC0F_E895_41D5_81A209D63596",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.4,
   "yaw": 129.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.35
  }
 ]
},
{
 "class": "PanoramaPlayListItem",
 "media": "this.panorama_BF2C9A17_EED2_F502_41B0_209AA8501663",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_camera",
 "id": "PanoramaPlayListItem_3B8D8578_133B_BE19_41A1_94421E9D1165"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "SALA COMEDOR\u000a\u000a",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E, this.camera_348756BF_133B_BA17_4159_62627A1414F6); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.79,
   "image": "this.AnimatedImageResource_E82BCF21_F018_F1FD_41D1_7C1F0DBDE2E8",
   "pitch": 2.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 43.26,
   "distance": 100
  }
 ],
 "id": "overlay_62D24D5A_6D0F_8ED4_41D2_8EA790297809",
 "data": {
  "label": "SALA COMEDOR"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.79,
   "yaw": 43.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.32
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BA\u00d1O PRINCIPAL ",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44, this.camera_3480B6CF_133B_BA77_4160_3C192BD67A33); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.06,
   "image": "this.AnimatedImageResource_31748E10_1364_8DE9_41B0_569168F8DB44",
   "pitch": -1.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 171.21,
   "distance": 100
  }
 ],
 "id": "overlay_0F47D013_1364_75EE_418D_CD517DB9A253",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.06,
   "yaw": 171.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.95
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "SALA",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2, this.camera_3779B8AB_133B_B63E_41A8_74E218E42306); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.33,
   "image": "this.AnimatedImageResource_E8D1BF26_F018_F1C7_41E3_D6E664C64D8C",
   "pitch": -22.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -159.99,
   "distance": 100
  }
 ],
 "id": "overlay_FE9B449F_EAF1_DD02_41E6_53D32922EA74",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.33,
   "yaw": -159.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -22.21
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7, this.camera_37059921_133B_B62A_4174_385209C65B08); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.9,
   "image": "this.AnimatedImageResource_31650E1C_1364_8A19_418C_70E6510F5478",
   "pitch": -14.67,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 5.9,
   "distance": 100
  }
 ],
 "id": "overlay_31F7269A_137D_BA19_4177_E29054D4617C",
 "data": {
  "label": "Circle Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.9,
   "yaw": 5.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -14.67
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.18,
   "image": "this.AnimatedImageResource_3165AE1D_1364_8A1B_41A1_A5D3ACADD40B",
   "pitch": 4.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 36.34,
   "distance": 100
  }
 ],
 "id": "overlay_31F7369A_137D_BA19_41B1_8ECDEF22CEDE",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.18,
   "yaw": 36.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.05
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.18,
   "image": "this.AnimatedImageResource_3165DE1D_1364_8A1B_41A7_E79B9CDEB4AE",
   "pitch": -3.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 36.53,
   "distance": 100
  }
 ],
 "id": "overlay_31F7069A_137D_BA19_4199_6AFE0CBF4B5B",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.18,
   "yaw": 36.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.75
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.06,
   "image": "this.AnimatedImageResource_31641E1D_1364_8A1B_41B0_80F95437D417",
   "pitch": -11.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 36.43,
   "distance": 100
  }
 ],
 "id": "overlay_31F7669A_137D_BA19_4190_E62852C0FB84",
 "data": {
  "label": "Circle Arrow 04"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.06,
   "yaw": 36.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -11.28
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.8,
   "image": "this.AnimatedImageResource_3164AE1E_1364_8A19_41A5_6803F21ECC2F",
   "pitch": 1.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -32.78,
   "distance": 100
  }
 ],
 "id": "overlay_31F7769A_137D_BA19_41AA_F9FFF6986BB7",
 "data": {
  "label": "Circle Arrow 04"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.8,
   "yaw": -32.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.2
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_5_0.png",
      "width": 232,
      "height": 49
     }
    ]
   },
   "pitch": -11.79,
   "yaw": 48.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_31F7569A_137D_BA19_419D_592413305EAC",
 "data": {
  "label": "LOBBY"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.35,
   "yaw": 48.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_5_0_map.gif",
      "width": 75,
      "height": 15
     }
    ]
   },
   "pitch": -11.79
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 25.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0_HS_6_0.png",
      "width": 355,
      "height": 59
     }
    ]
   },
   "pitch": -3.98,
   "yaw": 53.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_31F4B69A_137D_BA19_4158_049ED4BBC114",
 "data": {
  "label": "DEPARTAMENTO 607"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.51,
   "yaw": 53.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0_HS_6_0_map.gif",
      "width": 96,
      "height": 16
     }
    ]
   },
   "pitch": -3.98
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 29.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0_HS_7_0.png",
      "width": 406,
      "height": 57
     }
    ]
   },
   "pitch": 3.33,
   "yaw": 54.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_31F4E69A_137D_BA19_419D_44404C3EAE6C",
 "data": {
  "label": "DEPARTAMENTO 1201"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 29.18,
   "yaw": 54.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0_HS_7_0_map.gif",
      "width": 113,
      "height": 16
     }
    ]
   },
   "pitch": 3.33
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_8_0.png",
      "width": 297,
      "height": 48
     }
    ]
   },
   "pitch": 1.09,
   "yaw": -16.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_31F4F69B_137D_BA1F_41A2_EB4051CC023A",
 "data": {
  "label": "COWORKING"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.41,
   "yaw": -16.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_8_0_map.gif",
      "width": 99,
      "height": 16
     }
    ]
   },
   "pitch": 1.09
  }
 ]
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9_0",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.68",
     "zoomFactor": 1.1,
     "y": "0.56"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9_AlbumPlayList"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LAVANDERIA",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834, this.camera_374568C8_133B_B67A_41A8_7B130AC55B0D); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_7A38664E_6C74_4D4C_41CB_D59E47BBBC20",
 "data": {
  "label": "LAVANDERIA"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.99,
   "yaw": 38.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0_HS_5_1_0_map.gif",
      "width": 28,
      "height": 200
     }
    ]
   },
   "pitch": -5.21
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "COMEDOR",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E, this.camera_375038E6_133B_B636_4199_AC2ADD1EB52D); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.79,
   "image": "this.AnimatedImageResource_754FE34A_6C15_C4B5_41BA_DFE1FBF20954",
   "pitch": -9.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -161.98,
   "distance": 100
  }
 ],
 "id": "overlay_74A81DD8_6C1C_5F54_41D3_24FE58A2E92E",
 "data": {
  "label": " COMEDOR"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.79,
   "yaw": -161.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.73
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "SALA",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6, this.camera_374E88BA_133B_B61E_41A1_BB9BA0847E88); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.9,
   "image": "this.AnimatedImageResource_754E034B_6C15_CB4B_41D3_A0AE2D4889BD",
   "pitch": -2.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -170.96,
   "distance": 100
  }
 ],
 "id": "overlay_74A9239E_6C14_CBCC_41D9_A48D01593DE6",
 "data": {
  "label": "SALA"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.9,
   "yaw": -170.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.63
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LAVANDERIA\u000a",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834, this.camera_3759B8D7_133B_B616_41B1_2848B1C913D1); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.86,
   "image": "this.AnimatedImageResource_AC562641_BE29_B963_41C5_C361D7FF2443",
   "pitch": -6.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 39.5,
   "distance": 100
  }
 ],
 "id": "overlay_AFEB06B1_BE29_5923_41DE_5244D7CCB860",
 "data": {
  "label": "LAVANDERIA"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.86,
   "yaw": 39.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.22
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "\u000a",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.79,
   "image": "this.AnimatedImageResource_31617E19_1364_8A1B_4192_4548C7C59051",
   "pitch": 2.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 66.26,
   "distance": 100
  }
 ],
 "id": "overlay_F2E8C2C3_EB31_3501_41D5_8375A4D3D2CA",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.79,
   "yaw": 66.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.73
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2, this.camera_37314912_133B_B7EE_41A8_DE246B71D244); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.66,
   "image": "this.AnimatedImageResource_31619E19_1364_8A1B_41A7_BBF6F8B205AC",
   "pitch": -9.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 65.92,
   "distance": 100
  }
 ],
 "id": "overlay_F1090237_EB33_5502_41EA_729358860A63",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.66,
   "yaw": 65.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.08
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2, this.camera_372578F5_133B_B62A_41A4_3C8B7024B452); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.11,
   "image": "this.AnimatedImageResource_3161EE1A_1364_8A19_41A3_D51E25CB3FCA",
   "pitch": -20.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 65.78,
   "distance": 100
  }
 ],
 "id": "overlay_F108E775_EB37_FB06_41E9_289F4ADD97AC",
 "data": {
  "label": "Circle Arrow 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.11,
   "yaw": 65.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -20.58
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 25.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_3_0.png",
      "width": 355,
      "height": 83
     }
    ]
   },
   "pitch": -10.61,
   "yaw": 84.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F429BA47_EAF2_F502_41C8_EC3AE8D9B669",
 "data": {
  "label": "DEPARTAMENTO 607"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.16,
   "yaw": 84.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_3_0_map.gif",
      "width": 68,
      "height": 16
     }
    ]
   },
   "pitch": -10.61
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2, this.camera_373BC904_133B_B7EA_41B0_4F43353ED5D5); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_4_0.png",
      "width": 136,
      "height": 58
     }
    ]
   },
   "pitch": -21.08,
   "yaw": 76.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F490E7EC_EAF3_5B06_41EB_E107F9BDAC3B",
 "data": {
  "label": "LOBBY"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.19,
   "yaw": 76.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_4_0_map.gif",
      "width": 37,
      "height": 16
     }
    ]
   },
   "pitch": -21.08
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 27.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_5_0.png",
      "width": 381,
      "height": 54
     }
    ]
   },
   "pitch": 1.88,
   "yaw": 86.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F4794F52_EAF1_2B02_41B8_B98F09505770",
 "data": {
  "label": "DEPARTAMENTO 1201"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 27.43,
   "yaw": 86.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_5_0_map.gif",
      "width": 112,
      "height": 16
     }
    ]
   },
   "pitch": 1.88
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "PLAZUELA",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.8,
   "image": "this.AnimatedImageResource_35ED230F_1325_9BF7_41A2_133EE339798A",
   "pitch": -0.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 14.78,
   "distance": 100
  }
 ],
 "id": "overlay_0DE206EF_111F_BA36_4190_34919000FC2A",
 "data": {
  "label": "Circle Arrow 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.8,
   "yaw": 14.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.89
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_7_0.png",
      "width": 276,
      "height": 57
     }
    ]
   },
   "pitch": -1.13,
   "yaw": 31.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0F4A524B_1364_FA7F_41B0_C5C5E2D88BC5",
 "data": {
  "label": "PLAZUELA"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.87,
   "yaw": 31.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_7_0_map.gif",
      "width": 77,
      "height": 16
     }
    ]
   },
   "pitch": -1.13
  }
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "shadow": false,
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "shadow": false,
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton HS "
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "shadow": false,
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "borderRadius": 0,
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "DORMITORIO NI\u00d1A",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA, this.camera_34BDD690_133B_BAE9_41A7_74573B55DA4E); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.64,
   "image": "this.AnimatedImageResource_E82C0F1B_F018_F1CD_41E1_2C1A2284AA0B",
   "pitch": -0.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 56.31,
   "distance": 100
  }
 ],
 "id": "overlay_605CE276_6D0A_9ADF_41B5_1C25210B90E0",
 "data": {
  "label": "DORMITORIO NI\u00d1A"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.64,
   "yaw": 56.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.48
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "DORMITORIO NI\u00d1O\u000a",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.2,
   "image": "this.AnimatedImageResource_D4C3C8F4_CC0A_E98A_41D9_CB90F45DC0A8",
   "pitch": -1.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 25.51,
   "distance": 100
  }
 ],
 "id": "overlay_605F1276_6D0A_9ADF_41C1_8A6F5419B52D",
 "data": {
  "label": "DORMITORIO NI\u00d1O"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.2,
   "yaw": 25.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.11
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "DORMITORIO PRINCIPAL\u000a",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.2,
   "image": "this.AnimatedImageResource_D4C3E8F4_CC0A_E98A_41BE_B3B1C1E8439C",
   "pitch": -0.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 19.23,
   "distance": 100
  }
 ],
 "id": "overlay_605F0276_6D0A_9ADF_41BF_8EE9C85DDAAB",
 "data": {
  "label": "DORMITORIO PRINCIPAL"
 },
 "rollOverDisplay": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.2,
   "yaw": 19.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.92
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "COMEDOR\u000a",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E, this.camera_34AFA66C_133B_BA3A_4191_7638CF8DD6E2); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.93,
   "image": "this.AnimatedImageResource_D4C308F4_CC0A_E98A_41B8_4799F16A4B39",
   "pitch": -15.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.71,
   "distance": 100
  }
 ],
 "id": "overlay_605F3276_6D0A_9ADF_41D0_D8371D8168AD",
 "data": {
  "label": "COMEDOR"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.93,
   "yaw": -0.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -15.82
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "COCINA\u000a",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933, this.camera_34A9967B_133B_BA1E_41AC_715A18CB805A); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.2,
   "image": "this.AnimatedImageResource_0FCC022D_11E4_9A3B_41A5_71D62A16E4C7",
   "pitch": -0.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 7.62,
   "distance": 100
  }
 ],
 "id": "overlay_605F2276_6D0A_9ADF_41D2_63212E0558FE",
 "data": {
  "label": "COCINA"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.2,
   "yaw": 7.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_9_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.28
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_19_0.png",
      "width": 119,
      "height": 44
     }
    ]
   },
   "pitch": -2.94,
   "yaw": -6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0D364E2B_11EB_8A3F_41AA_2722DBF01AD2",
 "data": {
  "label": "LOBBY"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.58,
   "yaw": -6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_19_0_map.gif",
      "width": 43,
      "height": 16
     }
    ]
   },
   "pitch": -2.94
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2, this.camera_34A33689_133B_BAFA_4176_5323434349BA); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_20_0.png",
      "width": 280,
      "height": 43
     }
    ]
   },
   "pitch": 4.23,
   "yaw": -0.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0A2E190C_11E5_F7F9_41A8_EAECB2460143",
 "data": {
  "label": "DEPARTAMENTO 607"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.11,
   "yaw": -0.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_20_0_map.gif",
      "width": 104,
      "height": 16
     }
    ]
   },
   "pitch": 4.23
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.19,
   "image": "this.AnimatedImageResource_0DA010BB_111D_B61E_41A7_314C068DF080",
   "pitch": -2.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -13.37,
   "distance": 100
  }
 ],
 "id": "overlay_0C8E84E6_11EC_BE29_419B_BA3D4B9F33E2",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.19,
   "yaw": -13.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_21_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.78
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.17,
   "image": "this.AnimatedImageResource_0DA070BC_111D_B61A_41A6_5AF8446BD6CE",
   "pitch": 4.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -13.45,
   "distance": 100
  }
 ],
 "id": "overlay_0DFA2807_11EF_B5F7_41AC_F0FE9A06FBE5",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.17,
   "yaw": -13.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_22_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.85
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_31F7D699_137D_BA1B_4194_3C8AB767D613, this.camera_3463D70D_133B_BBFB_4132_2F55BE4F6A16); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.17,
   "image": "this.AnimatedImageResource_316BEE1F_1364_8A17_41AE_75E61AA5FAA9",
   "pitch": -15.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.03,
   "distance": 100
  }
 ],
 "id": "overlay_0E746D34_137C_8E2A_41B1_41FE8C15F1FE",
 "data": {
  "label": "Circle Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.17,
   "yaw": -0.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16
     }
    ]
   },
   "pitch": -15.41
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.24,
   "image": "this.AnimatedImageResource_316A6E1F_1364_8A17_41AE_F1487934A9F7",
   "pitch": -18.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -49.22,
   "distance": 100
  }
 ],
 "id": "overlay_0E749D34_137C_8E10_41A8_977BF3D8D601",
 "data": {
  "label": "Circle Arrow 04"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.24,
   "yaw": -49.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -18.49
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.79,
   "image": "this.AnimatedImageResource_316A8E1F_1364_8A17_416E_808338A8191A",
   "pitch": -1.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 85.32,
   "distance": 100
  }
 ],
 "id": "overlay_0E749D3A_137C_8E1E_419C_B041A35F6842",
 "data": {
  "label": "Circle Arrow 04"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.79,
   "yaw": 85.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.81
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.72,
   "image": "this.AnimatedImageResource_31691E20_1364_8A29_41A1_D57BBD64F793",
   "pitch": -6.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -107.33,
   "distance": 100
  }
 ],
 "id": "overlay_0E74BD3A_137C_8E1E_41A1_4B9C2B271AA0",
 "data": {
  "label": "Circle Arrow 04"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.72,
   "yaw": -107.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.87
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.71,
   "image": "this.AnimatedImageResource_31697E20_1364_8A29_41A1_9848A15A08F0",
   "pitch": -7.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -48.95,
   "distance": 100
  }
 ],
 "id": "overlay_0E74DD3A_137C_8E1E_417A_8E444ACCBE4A",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.71,
   "yaw": -48.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.55
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.78,
   "image": "this.AnimatedImageResource_3169FE20_1364_8A29_41A8_17D06BC1AF58",
   "pitch": 3.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -48.7,
   "distance": 100
  }
 ],
 "id": "overlay_0E74FD3A_137C_8E1E_4198_2A246C67D223",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.78,
   "yaw": -48.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.64
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_6_0.png",
      "width": 253,
      "height": 70
     }
    ]
   },
   "pitch": -2.38,
   "yaw": 73.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0E731D3A_137C_8E1E_41AE_96079A8E9344",
 "data": {
  "label": "COWORKING"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.25,
   "yaw": 73.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_6_0_map.gif",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -2.38
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_7_0.png",
      "width": 261,
      "height": 57
     }
    ]
   },
   "pitch": -18.85,
   "yaw": -34.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0E730D3A_137C_8E1E_41AE_C14985A39301",
 "data": {
  "label": "LOBBY"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.84,
   "yaw": -34.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_7_0_map.gif",
      "width": 73,
      "height": 16
     }
    ]
   },
   "pitch": -18.85
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 33.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_8_0.png",
      "width": 468,
      "height": 61
     }
    ]
   },
   "pitch": -7.92,
   "yaw": -26.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0E733D3B_137C_8E1E_419A_01318BBB5DA4",
 "data": {
  "label": "DEPARTAMENTO 607"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.4,
   "yaw": -26.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_8_0_map.gif",
      "width": 122,
      "height": 16
     }
    ]
   },
   "pitch": -7.92
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 33.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_9_0.png",
      "width": 472,
      "height": 71
     }
    ]
   },
   "pitch": 3.76,
   "yaw": -25.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0E732D3B_137C_8E1E_4165_ED2B285330DE",
 "data": {
  "label": "DEPARTAMENTO 1201"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.93,
   "yaw": -25.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_9_0_map.gif",
      "width": 106,
      "height": 16
     }
    ]
   },
   "pitch": 3.76
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 24.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_10_0.png",
      "width": 348,
      "height": 73
     }
    ]
   },
   "pitch": -7.66,
   "yaw": -87.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0E737D3B_137C_8E1E_419E_0DAF2E809B72",
 "data": {
  "label": "ZONA DE NI\u00d1OS"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 24.9,
   "yaw": -87.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_10_0_map.gif",
      "width": 76,
      "height": 16
     }
    ]
   },
   "pitch": -7.66
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "SALA COMEDOR",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E, this.camera_3784386F_133B_B636_41AE_2C2CBA74FE08); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.79,
   "image": "this.AnimatedImageResource_E8D49F21_F018_F1FD_41E1_B294F0B5D9CA",
   "pitch": -2.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -109.53,
   "distance": 100
  }
 ],
 "id": "overlay_74A3E056_6C1C_C55C_41D0_57D95575C25D",
 "data": {
  "label": "SALA COMEDOR"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.79,
   "yaw": -109.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.87
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "COCINA ",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C, this.camera_34580766_133B_BA29_41AC_B43B20E94115); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.55,
   "image": "this.AnimatedImageResource_30D2F30B_1324_BBFF_41A2_4E7A93E52C5B",
   "pitch": -8.31,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 74.03,
   "distance": 100
  }
 ],
 "id": "overlay_0EFA37DC_1324_9A19_419B_BFBE37290535",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.55,
   "yaw": 74.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.31
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "ESTUDIO",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA, this.camera_343F4794_133B_BAE9_419E_2628C6656606); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.63,
   "image": "this.AnimatedImageResource_30D2B30C_1324_BBF9_41A6_F67AD582C0D3",
   "pitch": -3.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 82.29,
   "distance": 100
  }
 ],
 "id": "overlay_0EFA27DC_1324_9A19_41A0_9253710EAB90",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.63,
   "yaw": 82.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.27
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "DORMITORIO",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965, this.camera_342A4785_133B_BAEB_41A5_73ED459A3106); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.62,
   "image": "this.AnimatedImageResource_30D1530C_1324_BBF9_41A9_2A3CE100F7CD",
   "pitch": 4.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.5,
   "distance": 100
  }
 ],
 "id": "overlay_0EFA17DC_1324_9A19_41AC_59D8B02E0BC7",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.62,
   "yaw": 89.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.16
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BA\u00d1O SECUNDARIO",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198, this.camera_3450D775_133B_BA2B_41B0_EED308F35F60); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.63,
   "image": "this.AnimatedImageResource_30D1E30C_1324_BBF9_419A_177682266B8C",
   "pitch": -3.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 97.8,
   "distance": 100
  }
 ],
 "id": "overlay_0EFA07DC_1324_9A19_4184_005143898131",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.63,
   "yaw": 97.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.29
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LAVANDERIA\u000a",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7, this.camera_345E8756_133B_BA69_41A3_248B3EE0B43F); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.55,
   "image": "this.AnimatedImageResource_30D1830D_1324_BBFB_4193_4C5FBBAA6A0C",
   "pitch": -8.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 115.49,
   "distance": 100
  }
 ],
 "id": "overlay_0EFA77DC_1324_9A19_4187_A358211E1AC0",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.55,
   "yaw": 115.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.17
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2, this.camera_344EE739_133B_BA1B_41AC_AB490E50A7E8); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.67,
   "image": "this.AnimatedImageResource_30D0530D_1324_BBFB_4170_0C6530ED4E27",
   "pitch": -8.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -141.05,
   "distance": 100
  }
 ],
 "id": "overlay_0EFA67DD_1324_9A1B_41A4_17695111D3E1",
 "data": {
  "label": "Circle Arrow 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.67,
   "yaw": -141.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.75
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6, this.camera_347D771C_133B_BA19_41A6_301D07AA1815); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.76,
   "image": "this.AnimatedImageResource_30D0C30D_1324_BBFB_419C_796AFE3EC165",
   "pitch": 4.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -141.02,
   "distance": 100
  }
 ],
 "id": "overlay_0EFA57DD_1324_9A1B_419C_0B156B71864F",
 "data": {
  "label": "Circle Arrow 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.76,
   "yaw": -141.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.88
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2, this.camera_3446B748_133B_BA79_419F_D7CD74DEBFFA); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_9_0.png",
      "width": 192,
      "height": 52
     }
    ]
   },
   "pitch": -8.96,
   "yaw": -129.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0EFA47DD_1324_9A1B_41AF_EAEE24240DFE",
 "data": {
  "label": "LOBBY"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.71,
   "yaw": -129.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_9_0_map.gif",
      "width": 59,
      "height": 16
     }
    ]
   },
   "pitch": -8.96
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6, this.camera_3475072A_133B_BA3E_4192_17A63EF7D8CF); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 30.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_10_0.png",
      "width": 418,
      "height": 64
     }
    ]
   },
   "pitch": 4.11,
   "yaw": -121.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0EFAA7DD_1324_9A1B_41AF_924BD718935B",
 "data": {
  "label": "DEPARTAMENTO 1201"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 30.07,
   "yaw": -121.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_10_0_map.gif",
      "width": 104,
      "height": 16
     }
    ]
   },
   "pitch": 4.11
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "SALA ",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2, this.camera_37A37843_133B_B66E_4194_ABAFA411261E); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.38,
   "image": "this.AnimatedImageResource_E8D76F25_F018_F1C5_41DD_433F23FF75DE",
   "pitch": -3.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -127.08,
   "distance": 100
  }
 ],
 "id": "overlay_DE20EF16_CCFA_68B6_41E4_B3CFA4D26429",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.38,
   "yaw": -127.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.12
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "DORMITORIO",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965, this.camera_34B646A0_133B_BA29_41B1_78C60397C632); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9,
   "image": "this.AnimatedImageResource_D4C228F9_CC0A_E97A_41D3_9D5ABB7D4CC0",
   "pitch": -0.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 114.66,
   "distance": 100
  }
 ],
 "id": "overlay_DC81D5D1_CC0A_3B8A_41C3_D2962D0C6F54",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9,
   "yaw": 114.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.4
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BA\u00d1O SECUNDARIO",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10, this.camera_37C24817_133B_B616_41A4_622F4351C3C0); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.18,
   "image": "this.AnimatedImageResource_E82FCF1D_F018_F1C5_41C2_4819AC47B9A4",
   "pitch": -4.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 74.56,
   "distance": 100
  }
 ],
 "id": "overlay_61B0E27C_6D0A_FAD3_41A6_A95CAF5B9EE4",
 "data": {
  "label": "BA\u00d1O SECUNDARIO"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.18,
   "yaw": 74.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.19
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "DORMITORIO PRINCIPAL",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E, this.camera_37F697FA_133B_BA19_419B_69796129584C); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.19,
   "image": "this.AnimatedImageResource_D4C2A8F5_CC0A_E98A_41D3_078499B4B8E6",
   "pitch": -3.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 84.62,
   "distance": 100
  }
 ],
 "id": "overlay_61B0F27C_6D0A_FAD3_41D5_0B44D94F15EB",
 "data": {
  "label": "DORMITORIO PRINCIPAL"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.19,
   "yaw": 84.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.61
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "DORMITORIO NI\u00d1O",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D, this.camera_37CBD809_133B_B5FB_4199_A7832B0E5987); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.18,
   "image": "this.AnimatedImageResource_D4C2D8F6_CC0A_E976_41D9_0789C2B4925C",
   "pitch": -4.12,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 98.69,
   "distance": 100
  }
 ],
 "id": "overlay_61B0A27C_6D0A_FAD3_41DA_8EA44259938C",
 "data": {
  "label": "DORMITORIO NI\u00d1O"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.18,
   "yaw": 98.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.12
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "DORMITORIO NI\u00d1A",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA, this.camera_37AD2835_133B_B62A_417D_2A1E279DE082); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.2,
   "image": "this.AnimatedImageResource_D4C2F8F6_CC0A_E976_41CB_98D1C68325D3",
   "pitch": -1.6,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 149.94,
   "distance": 100
  }
 ],
 "id": "overlay_61B0B27C_6D0A_FAD3_41D7_309E6EDAA255",
 "data": {
  "label": "DORMITORIO NI\u00d1A"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.2,
   "yaw": 149.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_9_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.6
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "COCINA",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933, this.camera_37D75826_133B_B636_4175_133418A1910C); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.19,
   "image": "this.AnimatedImageResource_D4C218F6_CC0A_E976_41E3_259B8688BEB2",
   "pitch": -3.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 11,
   "distance": 100
  }
 ],
 "id": "overlay_61B1427C_6D0A_FAD3_41B5_667A266A3970",
 "data": {
  "label": "COCINA"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.19,
   "yaw": 11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_10_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.44
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "SALA",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6, this.camera_37E1F7EB_133B_BA3F_41A5_791453D088A0); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.16,
   "image": "this.AnimatedImageResource_D4C248F6_CC0A_E976_41E8_80D520D401E6",
   "pitch": -5.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -174.89,
   "distance": 100
  }
 ],
 "id": "overlay_61B1527C_6D0A_FAD3_41D4_96906BD59629",
 "data": {
  "label": "SALA"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.16,
   "yaw": -174.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_11_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.72
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LAVANDERIA\u000a",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.2,
   "image": "this.AnimatedImageResource_D4C198F7_CC0A_E976_41E3_9E7936786173",
   "pitch": 1.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 21.02,
   "distance": 100
  }
 ],
 "id": "overlay_C3EBCEE1_CC0A_698A_41E7_C37F5D364E5E",
 "data": {
  "label": "COCINA"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.2,
   "yaw": 21.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_14_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.88
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_19_0.png",
      "width": 285,
      "height": 48
     }
    ]
   },
   "pitch": 3.16,
   "yaw": -4.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0AE93DFB_111C_8E1F_4163_3D9C87D7A5D8",
 "data": {
  "label": "DEPARTAMENTO 607"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.53,
   "yaw": -4.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_19_0_map.gif",
      "width": 95,
      "height": 16
     }
    ]
   },
   "pitch": 3.16
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_20_0.png",
      "width": 152,
      "height": 52
     }
    ]
   },
   "pitch": -4.01,
   "yaw": -9.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0ACC2FDA_1164_8A1E_41A7_11729B614BDB",
 "data": {
  "label": "LOBBY"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.93,
   "yaw": -9.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_20_0_map.gif",
      "width": 46,
      "height": 16
     }
    ]
   },
   "pitch": -4.01
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.19,
   "image": "this.AnimatedImageResource_0DA110C0_111D_B66A_41AA_B2952DDB1E4E",
   "pitch": -3.67,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -18.8,
   "distance": 100
  }
 ],
 "id": "overlay_0C2431F5_11EC_962A_41AD_47EFA1318B20",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.19,
   "yaw": -18.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_21_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.67
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.18,
   "image": "this.AnimatedImageResource_0DA150C1_111D_B66A_41AC_BA71D3A19661",
   "pitch": 4.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -18.99,
   "distance": 100
  }
 ],
 "id": "overlay_0C927CE9_11E4_8E3B_41A5_D7522ECAE055",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.18,
   "yaw": -18.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_22_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.13
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LOBBY\u000a",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2, this.camera_34D4065C_133B_BA1A_4182_1ABEE281FFC1); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.64,
   "image": "this.AnimatedImageResource_ED08B5CB_F1E1_587F_41D2_00219634E19E",
   "pitch": -10.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.45,
   "distance": 100
  }
 ],
 "id": "overlay_BF2C8A18_EED2_F50E_41E2_83692CEFCD47",
 "data": {
  "label": "Circle Arrow 05"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.64,
   "yaw": 0.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -10.71
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "SALA\u000a\u000a",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2, this.camera_346B76FF_133B_BA17_4191_FC379359FA22); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18,
   "image": "this.AnimatedImageResource_E8D11F27_F018_F1C5_41DA_47A0591F4DDB",
   "pitch": -0.14,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 119.15,
   "distance": 100
  }
 ],
 "id": "overlay_DB907139_CC0A_D8FD_41C7_EA0DABB5858C",
 "data": {
  "label": "Circle Arrow 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18,
   "yaw": 119.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.14
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2, this.camera_340AC7B1_133B_BA2B_4184_8998943DDAE0); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.18,
   "image": "this.AnimatedImageResource_E7E768A1_F01F_F0FD_41BA_C818D5CD1D12",
   "pitch": -4.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -154.51,
   "distance": 100
  }
 ],
 "id": "overlay_D7F56A71_CC16_688A_41D8_402CB7403AA7",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.18,
   "yaw": -154.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.54
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.19,
   "image": "this.AnimatedImageResource_E7E7F8A1_F01F_F0FD_41E8_553794C50712",
   "pitch": 3.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -154.62,
   "distance": 100
  }
 ],
 "id": "overlay_F1DBA1DD_EB31_5706_41E0_FB1583A76B81",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.19,
   "yaw": -154.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 3.58
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.05,
   "image": "this.AnimatedImageResource_E7E028A2_F01F_F0FF_41DB_FACE76218688",
   "pitch": 11.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -154.29,
   "distance": 100
  }
 ],
 "id": "overlay_F04A9C89_EB57_2D0E_41D3_E7D77A83DA0E",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.05,
   "yaw": -154.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 11.9
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 23.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_5_0.png",
      "width": 330,
      "height": 56
     }
    ]
   },
   "pitch": 2.88,
   "yaw": -139.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_CA6176D5_EAFF_7D06_41EA_11D155BBAE17",
 "data": {
  "label": "DEPARTAMENTO 607"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 23.8,
   "yaw": -139.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_5_0_map.gif",
      "width": 94,
      "height": 16
     }
    ]
   },
   "pitch": 2.88
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 24.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_6_0.png",
      "width": 350,
      "height": 45
     }
    ]
   },
   "pitch": 11.43,
   "yaw": -138.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_CB8674F5_EAFF_3D06_41E6_B6D74C5734B9",
 "data": {
  "label": "DEPARTAMENTO 1201"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 24.71,
   "yaw": -138.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_6_0_map.gif",
      "width": 124,
      "height": 16
     }
    ]
   },
   "pitch": 11.43
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2, this.camera_341FC7BF_133B_BA17_41A0_07FCE1A78C5A); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_7_0.png",
      "width": 166,
      "height": 53
     }
    ]
   },
   "pitch": -4.82,
   "yaw": -145.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_CAC4D938_EAFF_370E_41E5_7BECEF82DCCC",
 "data": {
  "label": "LOBBY"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.94,
   "yaw": -145.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_7_0_map.gif",
      "width": 50,
      "height": 16
     }
    ]
   },
   "pitch": -4.82
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "SALA",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E, this.camera_3492F6EE_133B_BA39_4168_A73BE388447A); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18,
   "image": "this.AnimatedImageResource_E8D47F22_F018_F1FF_41C0_46229710071B",
   "pitch": 0.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 138.5,
   "distance": 100
  }
 ],
 "id": "overlay_D5749469_CDFA_589A_41D2_F5BBB7F7B06C",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18,
   "yaw": 138.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.86
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "SALA\u000a",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2, this.camera_378D985F_133B_B616_4188_8524453587C1); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.4,
   "image": "this.AnimatedImageResource_E8D0FF26_F018_F1C7_41D1_8E954DFAB433",
   "pitch": 0.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -38.87,
   "distance": 100
  }
 ],
 "id": "overlay_DE1CD06B_CC1F_D89D_41E5_93ABBC9AD6C4",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.4,
   "yaw": -38.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.68
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BA\u00d1O PRINCIPAL\u000a",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA, this.camera_37B87851_133B_B66A_41A5_439C57EF5AE6); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.4,
   "image": "this.AnimatedImageResource_E8D02F26_F018_F1C7_41DB_F52AAF6C6B1B",
   "pitch": -0.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -129.5,
   "distance": 100
  }
 ],
 "id": "overlay_DDA5C3B9_CC1E_5FFD_41CD_B2290496D441",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.4,
   "yaw": -129.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.44
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "COCINA\u000a",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933, this.camera_341647CE_133B_BA79_41A0_29195C0BD83C); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "id": "overlay_7A5B32AB_6C14_C5F4_41BC_EF28F0DCE2F4",
 "data": {
  "label": "COCINA"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 90,
   "yaw": -90,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0_HS_0_1_3_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 90,
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0_HS_0_2_4_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 90,
   "yaw": 0,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0_HS_0_3_5_map.gif",
      "width": 200,
      "height": 200
     }
    ]
   },
   "pitch": -90
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933, this.camera_37EB77DC_133B_BA19_41AC_6A1064706C80); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.19,
   "image": "this.AnimatedImageResource_D4C098F9_CC0A_E97A_41E4_F94762A6D4AA",
   "pitch": -2.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -80.94,
   "distance": 100
  }
 ],
 "id": "overlay_DC94E2CA_CC36_399E_41B7_A2832A86E97D",
 "data": {
  "label": "Circle Arrow 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.19,
   "yaw": -80.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.87
  }
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
 "left": 10,
 "shadow": false,
 "borderSize": 0,
 "class": "IconButton",
 "width": "14.22%",
 "minHeight": 50,
 "paddingRight": 0,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton <"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742.png"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
 "shadow": false,
 "right": 10,
 "borderSize": 0,
 "class": "IconButton",
 "width": "14.22%",
 "minHeight": 50,
 "paddingRight": 0,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_rollover.png",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton >"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2.png"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.74,
   "image": "this.AnimatedImageResource_0CF2731D_11E7_BA1B_41AA_042789824B75",
   "pitch": 4.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.36,
   "distance": 100
  }
 ],
 "id": "overlay_0E544854_11E4_B669_41A8_81868A70226D",
 "data": {
  "label": "Circle Generic 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.74,
   "yaw": -51.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_25_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.57
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C539447A_C81D_B3A9_41E4_35662EC989DF, this.camera_3799687F_133B_B616_41AB_A04003B61FFB); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.76,
   "image": "this.AnimatedImageResource_0CF5831D_11E7_BA1B_41AE_802C4A869B02",
   "pitch": -1.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.29,
   "distance": 100
  }
 ],
 "id": "overlay_0E540854_11E4_B669_416A_FD494E759662",
 "data": {
  "label": "Circle Generic 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.76,
   "yaw": -51.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_26_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.39
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7, this.camera_376F188E_133B_B6F6_4180_D636FA23D200); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.71,
   "image": "this.AnimatedImageResource_0CF5331E_11E7_BA19_41A2_2D28ACA93344",
   "pitch": -7.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.36,
   "distance": 100
  }
 ],
 "id": "overlay_0E541854_11E4_B669_419A_CAA0EDBFE482",
 "data": {
  "label": "Circle Generic 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.71,
   "yaw": -51.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_27_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -7.27
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.6,
   "image": "this.AnimatedImageResource_0CF4B31F_11E7_BA17_4160_C21BF629C624",
   "pitch": -13.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.14,
   "distance": 100
  }
 ],
 "id": "overlay_0E54C855_11E4_B66B_41AA_566ED8BFA86D",
 "data": {
  "label": "Circle Generic 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.6,
   "yaw": -51.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_28_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -13.7
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.41,
   "image": "this.AnimatedImageResource_0CF4E31F_11E7_BA17_4195_D06B7EE132A5",
   "pitch": -20,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.07,
   "distance": 100
  }
 ],
 "id": "overlay_0E54A855_11E4_B66B_4196_AA093E64A598",
 "data": {
  "label": "Circle Generic 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.41,
   "yaw": -51.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_29_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -20
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.65,
   "image": "this.AnimatedImageResource_0CF4231F_11E7_BA17_4190_4F55100188DB",
   "pitch": 11.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.29,
   "distance": 100
  }
 ],
 "id": "overlay_0E548855_11E4_B66B_417D_40F119C223E2",
 "data": {
  "label": "Circle Generic 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.65,
   "yaw": -51.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_30_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 11.15
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.5,
   "image": "this.AnimatedImageResource_0CF47320_11E7_BA29_41A6_6CE5F55C30BD",
   "pitch": 17.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.21,
   "distance": 100
  }
 ],
 "id": "overlay_0E549855_11E4_B66B_41A9_51724539E692",
 "data": {
  "label": "Circle Generic 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.5,
   "yaw": -51.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_31_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 17.16
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_32_0.png",
      "width": 173,
      "height": 51
     }
    ]
   },
   "pitch": 3.99,
   "yaw": -43.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0E556855_11E4_B66B_41A8_F39C43434AEA",
 "data": {
  "label": "COWORKING"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.46,
   "yaw": -43.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_32_0_map.gif",
      "width": 54,
      "height": 16
     }
    ]
   },
   "pitch": 3.99
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_33_0.png",
      "width": 93,
      "height": 49
     }
    ]
   },
   "pitch": -1.8,
   "yaw": -46.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0E557855_11E4_B66B_419E_D491435D6598",
 "data": {
  "label": "SUM"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.72,
   "yaw": -46.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_33_0_map.gif",
      "width": 30,
      "height": 15
     }
    ]
   },
   "pitch": -1.8
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.76,
   "image": "this.AnimatedImageResource_0CF73321_11E7_BA2B_41A0_534EB6576F6D",
   "pitch": -1.37,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -34.71,
   "distance": 100
  }
 ],
 "id": "overlay_0E555855_11E4_B66B_41A5_13BD4D03F8C2",
 "data": {
  "label": "Circle Generic 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.76,
   "yaw": -34.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_34_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.37
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.74,
   "image": "this.AnimatedImageResource_0CF6B322_11E7_BA29_41A0_9FB62C80566C",
   "pitch": 4.31,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -34.91,
   "distance": 100
  }
 ],
 "id": "overlay_0E553855_11E4_B66B_4195_7743E73AB6CD",
 "data": {
  "label": "Circle Generic 03"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.74,
   "yaw": -34.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_35_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.31
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 24.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_36_0.png",
      "width": 336,
      "height": 57
     }
    ]
   },
   "pitch": 3.56,
   "yaw": -21.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0E55F855_11E4_B66B_41A5_5DA441414ACD",
 "data": {
  "label": "DEPARTAMENTO 1201"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 24.21,
   "yaw": -21.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_36_0_map.gif",
      "width": 94,
      "height": 16
     }
    ]
   },
   "pitch": 3.56
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 23.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_37_0.png",
      "width": 322,
      "height": 47
     }
    ]
   },
   "pitch": -1.79,
   "yaw": -21.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0E55D855_11E4_B66B_4199_C582EC17585D",
 "data": {
  "label": "DEPARTAMENTO 607"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 23.25,
   "yaw": -21.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_37_0_map.gif",
      "width": 109,
      "height": 16
     }
    ]
   },
   "pitch": -1.79
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7, this.camera_3764689D_133B_B61A_4168_ED7C818DCB95); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_38_0.png",
      "width": 172,
      "height": 50
     }
    ]
   },
   "pitch": -7.7,
   "yaw": -43.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0E55B856_11E4_B669_41A5_44FDAFC7304E",
 "data": {
  "label": "PLAZUELA"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.34,
   "yaw": -43.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_38_0_map.gif",
      "width": 55,
      "height": 16
     }
    ]
   },
   "pitch": -7.7
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "SALA",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2, this.camera_348EA6AF_133B_BA37_41A4_2678A9A0ADD8); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.11,
   "image": "this.AnimatedImageResource_F27D8DE9_EAD3_2F01_41BE_8C6568382C3E",
   "pitch": -8.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -141.98,
   "distance": 100
  }
 ],
 "id": "overlay_F9F57609_EAF1_7D0E_41BC_902E1B353526",
 "data": {
  "label": "Circle Arrow 04"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.11,
   "yaw": -141.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.9
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "LAVANDERIA",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.68,
   "image": "this.AnimatedImageResource_E8D1AF25_F018_F1C5_41E9_067A7609F8D1",
   "pitch": -8.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -153.25,
   "distance": 100
  }
 ],
 "id": "overlay_FEEAA098_EAFE_D50E_41E7_2F6A9CA4D688",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.68,
   "yaw": -153.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.63
  }
 ]
},
{
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "shadow": false,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "width": 66,
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "left": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "width": 330,
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "shadow": false,
 "right": "0%",
 "width": 110,
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 110,
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 },
 "propagateClick": true,
 "layout": "horizontal",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarColor": "#000000",
 "shadow": false,
 "right": "0%",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "91.304%",
 "contentOpaque": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "gap": 3,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "85.959%",
 "paddingBottom": 0,
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_6ECE7198_4F7D_CE0F_41B4_ED3C974BE2A1",
  "this.Container_6ECE5198_4F7D_CE0F_416D_84774E7F2542"
 ],
 "id": "Container_6ECE8198_4F7D_CE0F_41B6_C7C8D7E8FF58",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarColor": "#000000",
 "right": "15%",
 "shadowColor": "#000000",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0
},
{
 "children": [
  "this.IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C"
 ],
 "id": "Container_6EC9F199_4F7D_CE01_41C8_1A8AEA0A382B",
 "left": "15%",
 "shadow": false,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
  "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9"
 ],
 "id": "Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarColor": "#000000",
 "right": "15%",
 "shadowColor": "#000000",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0
},
{
 "shadowHorizontalLength": 0,
 "children": [
  "this.WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70"
 ],
 "id": "Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarColor": "#000000",
 "right": "15%",
 "shadowColor": "#000000",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0
},
{
 "children": [
  "this.IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848"
 ],
 "id": "Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F",
 "left": "15%",
 "shadow": false,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1"
 ],
 "id": "Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarColor": "#000000",
 "right": "15%",
 "shadowColor": "#000000",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0
},
{
 "shadowHorizontalLength": 0,
 "children": [
  "this.MapViewer",
  "this.Container_6FD207C1_4F7F_B27E_41CC_18278046BDCA"
 ],
 "id": "Container_6FD227C1_4F7F_B27E_41A4_4340D943D7A5",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarColor": "#000000",
 "right": "15%",
 "shadowColor": "#000000",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0
},
{
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_17521AC5_57D1_805F_41CD_E04DDA9C90DD",
  "this.Container_1752FAC5_57D1_805F_4193_13B2577B9D8A"
 ],
 "id": "Container_17522AC5_57D1_805F_41CA_96B265C364E4",
 "left": "15%",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "scrollBarColor": "#000000",
 "right": "15%",
 "shadowColor": "#000000",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "shadowVerticalLength": 0
},
{
 "children": [
  "this.IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0"
 ],
 "id": "Container_17516AC5_57D1_805F_41CA_8E754787B1A2",
 "left": "15%",
 "shadow": false,
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E82B7F21_F018_F1FD_4189_5DD4BE2C25BE",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8D4CF21_F018_F1FD_41E5_8DCC81B00E78",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E82BCF21_F018_F1FD_41D1_7C1F0DBDE2E8",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_31748E10_1364_8DE9_41B0_569168F8DB44",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8D1BF26_F018_F1C7_41E3_D6E664C64D8C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_31650E1C_1364_8A19_418C_70E6510F5478",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_0_0.png",
   "width": 1220,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3165AE1D_1364_8A1B_41A1_A5D3ACADD40B",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3165DE1D_1364_8A1B_41A7_E79B9CDEB4AE",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_31641E1D_1364_8A1B_41B0_80F95437D417",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3164AE1E_1364_8A19_41A5_6803F21ECC2F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_4_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_754FE34A_6C15_C4B5_41BA_DFE1FBF20954",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0_HS_6_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_754E034B_6C15_CB4B_41D3_A0AE2D4889BD",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0_HS_7_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_AC562641_BE29_B963_41C5_C361D7FF2443",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0_HS_8_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_31617E19_1364_8A1B_4192_4548C7C59051",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_31619E19_1364_8A1B_41A7_BBF6F8B205AC",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3161EE1A_1364_8A19_41A3_D51E25CB3FCA",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_35ED230F_1325_9BF7_41A2_133EE339798A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_6_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E82C0F1B_F018_F1CD_41E1_2C1A2284AA0B",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_5_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_D4C3C8F4_CC0A_E98A_41D9_CB90F45DC0A8",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_6_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_D4C3E8F4_CC0A_E98A_41BE_B3B1C1E8439C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_7_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_D4C308F4_CC0A_E98A_41B8_4799F16A4B39",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_8_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0FCC022D_11E4_9A3B_41A5_71D62A16E4C7",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_9_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0DA010BB_111D_B61E_41A7_314C068DF080",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_21_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0DA070BC_111D_B61A_41A6_5AF8446BD6CE",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_22_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_316BEE1F_1364_8A17_41AE_75E61AA5FAA9",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_0_0.png",
   "width": 1220,
   "height": 480
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_316A6E1F_1364_8A17_41AE_F1487934A9F7",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_316A8E1F_1364_8A17_416E_808338A8191A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_31691E20_1364_8A29_41A1_D57BBD64F793",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_31697E20_1364_8A29_41A1_9848A15A08F0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_4_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3169FE20_1364_8A29_41A8_17D06BC1AF58",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_5_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8D49F21_F018_F1FD_41E1_B294F0B5D9CA",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_30D2F30B_1324_BBFF_41A2_4E7A93E52C5B",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_30D2B30C_1324_BBF9_41A6_F67AD582C0D3",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_30D1530C_1324_BBF9_41A9_2A3CE100F7CD",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_2_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_30D1E30C_1324_BBF9_419A_177682266B8C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_30D1830D_1324_BBFB_4193_4C5FBBAA6A0C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_4_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_30D0530D_1324_BBFB_4170_0C6530ED4E27",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_7_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_30D0C30D_1324_BBFB_419C_796AFE3EC165",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0EFBC7DC_1324_9A19_418E_49E4448859C2_1_HS_8_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8D76F25_F018_F1C5_41DD_433F23FF75DE",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_D4C228F9_CC0A_E97A_41D3_9D5ABB7D4CC0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E82FCF1D_F018_F1C5_41C2_4819AC47B9A4",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_6_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_D4C2A8F5_CC0A_E98A_41D3_078499B4B8E6",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_7_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_D4C2D8F6_CC0A_E976_41D9_0789C2B4925C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_8_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_D4C2F8F6_CC0A_E976_41CB_98D1C68325D3",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_9_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_D4C218F6_CC0A_E976_41E3_259B8688BEB2",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_10_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_D4C248F6_CC0A_E976_41E8_80D520D401E6",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_11_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_D4C198F7_CC0A_E976_41E3_9E7936786173",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_14_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0DA110C0_111D_B66A_41AA_B2952DDB1E4E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_21_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0DA150C1_111D_B66A_41AC_BA71D3A19661",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_22_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_ED08B5CB_F1E1_587F_41D2_00219634E19E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8D11F27_F018_F1C5_41DA_47A0591F4DDB",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E7E768A1_F01F_F0FD_41BA_C818D5CD1D12",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E7E7F8A1_F01F_F0FD_41E8_553794C50712",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_3_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E7E028A2_F01F_F0FF_41DB_FACE76218688",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_4_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8D47F22_F018_F1FF_41C0_46229710071B",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8D0FF26_F018_F1C7_41D1_8E954DFAB433",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8D02F26_F018_F1C7_41DB_F52AAF6C6B1B",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_D4C098F9_CC0A_E97A_41E4_F94762A6D4AA",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0CF2731D_11E7_BA1B_41AA_042789824B75",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_25_0.png",
   "width": 1000,
   "height": 1500
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0CF5831D_11E7_BA1B_41AE_802C4A869B02",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_26_0.png",
   "width": 1000,
   "height": 1500
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0CF5331E_11E7_BA19_41A2_2D28ACA93344",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_27_0.png",
   "width": 1000,
   "height": 1500
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0CF4B31F_11E7_BA17_4160_C21BF629C624",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_28_0.png",
   "width": 1000,
   "height": 1500
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0CF4E31F_11E7_BA17_4195_D06B7EE132A5",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_29_0.png",
   "width": 1000,
   "height": 1500
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0CF4231F_11E7_BA17_4190_4F55100188DB",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_30_0.png",
   "width": 1000,
   "height": 1500
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0CF47320_11E7_BA29_41A6_6CE5F55C30BD",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_31_0.png",
   "width": 1000,
   "height": 1500
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0CF73321_11E7_BA2B_41A0_534EB6576F6D",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_34_0.png",
   "width": 1000,
   "height": 1500
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_0CF6B322_11E7_BA29_41A0_9FB62C80566C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_35_0.png",
   "width": 1000,
   "height": 1500
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_F27D8DE9_EAD3_2F01_41BE_8C6568382C3E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0_HS_0_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8D1AF25_F018_F1C5_41E9_067A7609F8D1",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "scrollBarWidth": 10,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "width": 30,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#0089C8"
 ],
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Container blue"
 },
 "paddingLeft": 0,
 "propagateClick": true,
 "layout": "absolute",
 "backgroundColorRatios": [
  0
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 4,
 "shadow": false,
 "width": 50,
 "borderSize": 0,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "scrollBarColor": "#000000",
 "overflow": "scroll",
 "width": 259,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 40,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.4,
 "backgroundColor": [
  "#0089C8"
 ],
 "gap": 10,
 "paddingTop": 40,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 40,
 "data": {
  "name": "- Buttons set"
 },
 "paddingLeft": 40,
 "propagateClick": true,
 "layout": "absolute",
 "backgroundColorRatios": [
  0
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 40,
 "maxWidth": 40,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "shadow": false,
 "right": 50,
 "width": 40,
 "borderSize": 0,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "46.03%",
 "bottom": "49.6%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png"
},
{
 "transparencyActive": true,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "shadow": false,
 "width": 60,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "borderRadius": 0,
 "height": 60,
 "paddingBottom": 0,
 "data": {
  "name": "image button menu"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "shadow": false,
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingTop": 0,
 "click": "this.shareTwitter(window.location.href)",
 "borderRadius": 0,
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton TWITTER"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "shadow": false,
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingTop": 0,
 "click": "this.shareFacebook(window.location.href)",
 "borderRadius": 0,
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FB"
 },
 "propagateClick": true,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2"
 ],
 "id": "Container_6ECE7198_4F7D_CE0F_41B4_ED3C974BE2A1",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "85%",
 "contentOpaque": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_6ECE4198_4F7D_CE0F_41A0_688A405FA9A1",
  "this.Container_6ECE3198_4F7D_CE0F_41B9_971123164DFE",
  "this.Container_6ECE0198_4F7D_CE0F_41C2_173DE9AC91EC"
 ],
 "id": "Container_6ECE5198_4F7D_CE0F_416D_84774E7F2542",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.51,
 "class": "Container",
 "paddingRight": 50,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 460,
 "width": "50%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 50,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C",
 "shadow": false,
 "borderSize": 0,
 "class": "IconButton",
 "width": "25%",
 "minHeight": 50,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C.jpg"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633"
 ],
 "id": "Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 140,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "itemMaxWidth": 1000,
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9",
 "left": 0,
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "itemPaddingRight": 3,
 "class": "ThumbnailGrid",
 "minHeight": 1,
 "itemMode": "normal",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemThumbnailOpacity": 1,
 "itemLabelFontFamily": "Oswald",
 "itemMaxHeight": 1000,
 "itemBorderRadius": 0,
 "paddingRight": 70,
 "minWidth": 1,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "width": "100%",
 "verticalAlign": "middle",
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0,
 "itemOpacity": 1,
 "itemHorizontalAlign": "center",
 "itemBackgroundOpacity": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 0,
 "height": "92%",
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemWidth": 220,
 "paddingLeft": 70,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "shadow": false,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemThumbnailShadow": true,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
 "scrollBarMargin": 2,
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "paddingBottom": 70,
 "data": {
  "name": "ThumbnailList"
 },
 "itemPaddingBottom": 3,
 "scrollBarWidth": 10,
 "itemThumbnailShadow": false,
 "itemLabelGap": 7,
 "itemThumbnailWidth": 220
},
{
 "id": "WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "scrollEnabled": true,
 "class": "WebFrame",
 "paddingRight": 0,
 "url": "https://maps.google.com/maps?output=embed&center=-12.0710418,-77.0523873&z=20&q=Juan+Pablo+Fernandini+1275,+Pueblo+Libre+15084",
 "minWidth": 1,
 "insetBorder": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame"
 },
 "height": "100%",
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848",
 "shadow": false,
 "borderSize": 0,
 "class": "IconButton",
 "width": "25%",
 "minHeight": 50,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848.jpg"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
  "this.IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
  "this.IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
  "this.IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F"
 ],
 "id": "Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "left": "0%",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "class": "ViewerArea",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 1,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Floor Plan"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "children": [
  "this.IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54"
 ],
 "id": "Container_6FD207C1_4F7F_B27E_41CC_18278046BDCA",
 "scrollBarColor": "#000000",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 140,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_17520AC5_57D1_805F_41CD_E7281C08A967"
 ],
 "id": "Container_17521AC5_57D1_805F_41CD_E04DDA9C90DD",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "55%",
 "contentOpaque": false,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_1752EAC5_57D1_805F_41D2_28E2DB3AFCF5",
  "this.Container_1752DAC5_57D1_805F_41D3_AAEEE721B441",
  "this.Container_17517AC5_57D1_805F_41B5_79DEF98B730F"
 ],
 "id": "Container_1752FAC5_57D1_805F_4193_13B2577B9D8A",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "visible",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.51,
 "class": "Container",
 "paddingRight": 60,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 460,
 "width": "45%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 60,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0",
 "shadow": false,
 "borderSize": 0,
 "class": "IconButton",
 "width": "25%",
 "minHeight": 50,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0.jpg"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "shadow": false,
 "borderSize": 0,
 "class": "Image",
 "width": "100%",
 "minHeight": 30,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "top",
 "minWidth": 40,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.jpg",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "25%",
 "paddingBottom": 0,
 "data": {
  "name": "Image Company"
 },
 "propagateClick": true,
 "scaleMode": "fit_inside",
 "paddingLeft": 0
},
{
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_5B1F16A9_4F08_3101_41C0_148FE9D83410",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
  "this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "scrollBarColor": "#000000",
 "shadow": false,
 "right": "0%",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "paddingRight": 0,
 "top": "26%",
 "contentOpaque": false,
 "bottom": "26%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.3,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "data": {
  "name": "-Level 1"
 },
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 6
},
{
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "scrollBarColor": "#000000",
 "shadow": false,
 "right": "0%",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": "0%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "width": "76.818%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 130,
 "paddingBottom": 0,
 "data": {
  "name": "-Container footer"
 },
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarWidth": 10
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2",
 "left": "0%",
 "shadow": false,
 "borderSize": 0,
 "class": "Image",
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "url": "skin/Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2.jpg",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Image"
 },
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "id": "Container_6ECE4198_4F7D_CE0F_41A0_688A405FA9A1",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "height": 60,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_6ECE2198_4F7D_CE0F_41C1_6D512C0D0B76",
  "this.Button_6ECE1198_4F7D_CE0F_41D1_D607B97BA20A"
 ],
 "id": "Container_6ECE3198_4F7D_CE0F_41B9_971123164DFE",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "scrollBarOpacity": 0.79,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 100,
 "width": "100%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "id": "Container_6ECE0198_4F7D_CE0F_41C2_173DE9AC91EC",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633",
 "shadow": false,
 "right": 20,
 "borderSize": 0,
 "class": "IconButton",
 "width": "100%",
 "minHeight": 50,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "top": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_pressed.jpg",
 "borderRadius": 0,
 "height": "36.14%",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633.jpg"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
 "left": "0%",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "class": "ViewerArea",
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "minWidth": 1,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F",
 "shadow": false,
 "right": 20,
 "borderSize": 0,
 "class": "IconButton",
 "width": "10%",
 "minHeight": 50,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "top": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_pressed.jpg",
 "borderRadius": 0,
 "height": "10%",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F.jpg"
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54",
 "shadow": false,
 "right": 20,
 "borderSize": 0,
 "class": "IconButton",
 "width": "100%",
 "minHeight": 50,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "top": 20,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_rollover.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_pressed.jpg",
 "borderRadius": 0,
 "height": "36.14%",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54.jpg"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_17520AC5_57D1_805F_41CD_E7281C08A967",
 "left": "0%",
 "shadow": false,
 "borderSize": 0,
 "class": "Image",
 "width": "100%",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "0%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "url": "skin/Image_17520AC5_57D1_805F_41CD_E7281C08A967.jpg",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Image40635"
 },
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "id": "Container_1752EAC5_57D1_805F_41D2_28E2DB3AFCF5",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "contentOpaque": false,
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "height": "5%",
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.HTMLText_1752BAC5_57D1_805F_41C3_4D3FE0C946A5",
  "this.Container_1752AAC5_57D1_805F_41C3_F3A70F1424E8"
 ],
 "id": "Container_1752DAC5_57D1_805F_41D3_AAEEE721B441",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "scrollBarOpacity": 0.79,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 100,
 "width": "100%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "id": "Container_17517AC5_57D1_805F_41B5_79DEF98B730F",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "width": 370,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "paddingLeft": 0,
 "propagateClick": false,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button 1 - Reception"
 },
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "class": "Button",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "minWidth": 1,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "VISTA EXTERIOR >",
 "borderRadius": 0,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_3B8D8578_133B_BE19_41A1_94421E9D1165, -1.516245487364621, -12.45);; this.mainPlayList.set('selectedIndex', 0)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 10,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2
},
{
 "scrollBarWidth": 10,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button 2 - Rooms"
 },
 "id": "Button_5B1F16A9_4F08_3101_41C0_148FE9D83410",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "class": "Button",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "minWidth": 1,
 "shadowColor": "#000000",
 "gap": 23,
 "paddingTop": 0,
 "label": "LOBBY >",
 "borderRadius": 0,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 17)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 10,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2
},
{
 "scrollBarWidth": 10,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button 3 - Amenities"
 },
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "class": "Button",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "minWidth": 1,
 "shadowColor": "#000000",
 "gap": 23,
 "paddingTop": 0,
 "label": "\u00c1REAS COMUNES >",
 "borderRadius": 0,
 "height": 50,
 "click": "if(!this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3.get('visible')){ this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 10,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2
},
{
 "scrollBarWidth": 7,
 "children": [
  "this.Container_5C7DCB10_4F38_571F_41B6_A2C80BEB0DB6",
  "this.Container_5C7DEB11_4F38_5701_41D1_BD9BEF92F61B",
  "this.Button_5C467B11_4F38_5701_41BD_6ADABBF10640",
  "this.Button_5C461B12_4F38_5703_41A5_2B58A57259CB",
  "this.Button_5C463B13_4F38_5701_41D3_7F808639BD58",
  "this.Button_5C47EB13_4F38_5701_41D0_849C58570FD5",
  "this.Button_5C478B14_4F38_5707_41B7_E567FC5BFF03",
  "this.Button_5C47BB14_4F38_5707_41C5_004237DF4BC7",
  "this.Button_5C475B14_4F38_5707_41B5_45CB509F3FEC",
  "this.Button_5C470B15_4F38_5701_41C8_8315EAA43F47"
 ],
 "id": "Container_5C522B60_4F38_573F_41CA_3223B2D946A3",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "width": "100%",
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 200,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 3-1"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button 4 - Sports area"
 },
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "class": "Button",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "minWidth": 1,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "DEPARTAMENTO 1201 >",
 "borderRadius": 0,
 "height": 50,
 "click": "if(!this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F.get('visible')){ this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 10,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2
},
{
 "scrollBarWidth": 10,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 7,
 "children": [
  "this.Container_5CB12513_4F38_7300_41C1_CF46A5DB681C",
  "this.Container_5CBEF513_4F38_7300_41CD_FE4054DD71DB",
  "this.Button_5CBE8514_4F38_7300_41C7_4C2B003C16FE",
  "this.Button_5CBEA514_4F38_7300_41C4_E7D746E7D487",
  "this.Button_5CBE4515_4F38_7300_41D1_1CA43C43E7F8",
  "this.Button_5CBE1515_4F38_7300_41B8_0BE61EE2A2AC",
  "this.Button_5CBE2516_4F38_7300_41B3_266EC752AC75",
  "this.Button_5CBFF516_4F38_7300_41C0_01CB82BCD11E",
  "this.Button_5CBF9517_4F38_7300_41BB_8710868B4E0A",
  "this.Button_5CBFA517_4F38_7300_41CC_D4157FF5A756"
 ],
 "id": "Container_5C937563_4F38_7301_41CE_2342D0CB6B4F",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "width": "100%",
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 200,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 4-1"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button 5 - Swimming"
 },
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "class": "Button",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "minWidth": 1,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "DEPARTAMENTO 607 >",
 "borderRadius": 0,
 "height": 50,
 "click": "if(!this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F.get('visible')){ this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 10,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2
},
{
 "scrollBarWidth": 7,
 "children": [
  "this.Container_5CE0FDFC_4F38_7300_41BA_B59158C97EA7",
  "this.Container_5CE09DFC_4F38_7300_41C5_496587AD3AF4",
  "this.Button_5CE04DFD_4F38_7300_41CF_9AA175DB4918",
  "this.Button_5CE02DFD_4F38_7300_41AC_5CCE35E28CCE",
  "this.Button_5CE1FDFE_4F38_7300_41CB_C0EFC8517F56",
  "this.Button_5CE1BDFE_4F38_7300_41AF_930026BA5A6C",
  "this.Button_5CE17DFF_4F38_7300_41C6_8F855B436216",
  "this.Button_5CE13DFF_4F38_7300_4168_8B08D53E7557",
  "this.Button_5CEEFE00_4F38_7100_41C4_47D712DA1F96",
  "this.Button_5CEEAE00_4F38_7100_41CA_772C2B0C9596"
 ],
 "id": "Container_5CCC0E8D_4F38_7101_41A7_17785177980F",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "width": "100%",
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 200,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 5-1"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "class": "Button",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "toggle",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.2,
 "minWidth": 1,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "RESTAURANTS >",
 "borderRadius": 0,
 "height": 50,
 "click": "if(!this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062.get('visible')){ this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "shadowSpread": 1,
 "visible": false,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 10,
 "cursor": "hand",
 "pressedBackgroundOpacity": 0.2
},
{
 "scrollBarWidth": 10,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 7,
 "children": [
  "this.Container_5CDED17E_4F38_5303_41CD_E7D6CF4384E1",
  "this.Container_5CDE817F_4F38_5301_41CB_1573369D710F",
  "this.Button_5CDE217F_4F38_5301_41C6_96F7478E4BCD",
  "this.Button_5CDFE180_4F38_53FF_41BA_C2AE8CF20676",
  "this.Button_5CDFA180_4F38_53FF_41B1_A82E7A427261",
  "this.Button_5CDF7181_4F38_5301_41D0_9F8175F5BACF",
  "this.Button_5CDF2181_4F38_5301_419E_50D4A975C358",
  "this.Button_5CDCF182_4F38_5303_41BA_3B4FB28D5CC6",
  "this.Button_5CDCD187_4F38_5301_41D2_1D9369EA7682",
  "this.Button_5CDC6188_4F38_530F_416D_D8C2C6CAD624"
 ],
 "id": "Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 10,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "width": "100%",
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 200,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 6-1"
 },
 "visible": false,
 "propagateClick": true,
 "layout": "vertical",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "visible",
 "width": 40,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 1,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 2,
 "paddingBottom": 0,
 "data": {
  "name": "blue line"
 },
 "paddingLeft": 0,
 "propagateClick": true,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "scrollBarColor": "#000000",
 "shadow": false,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "width": "100%",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 78,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "visible": false,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "scrollBarColor": "#000000",
 "shadow": false,
 "overflow": "visible",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "gap": 7,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 56,
 "paddingBottom": 0,
 "data": {
  "name": "-Container Icons 1"
 },
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "paddingLeft": 0,
 "propagateClick": false
},
{
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "scrollBarColor": "#000000",
 "shadow": false,
 "overflow": "visible",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "gap": 7,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "-Container Icons 2"
 },
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "paddingLeft": 0,
 "propagateClick": false
},
{
 "id": "HTMLText_6ECE2198_4F7D_CE0F_41C1_6D512C0D0B76",
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin. </SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "id": "Button_6ECE1198_4F7D_CE0F_41D1_D607B97BA20A",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "width": 180,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "Button",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#04A3E1"
 ],
 "iconBeforeLabel": true,
 "mode": "push",
 "fontSize": "2.39vh",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "minWidth": 1,
 "shadowColor": "#000000",
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "label": "LOREM IPSUM",
 "borderRadius": 50,
 "height": 50,
 "rollOverBackgroundOpacity": 1,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "shadowSpread": 1,
 "paddingLeft": 0,
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "fontWeight": "bold",
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "id": "HTMLText_1752BAC5_57D1_805F_41C3_4D3FE0C946A5",
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "46%",
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_17529AC5_57D1_805F_41BD_C64BF1F259C6",
  "this.HTMLText_17528AC5_57D1_805F_41CC_502F9EE91657"
 ],
 "id": "Container_1752AAC5_57D1_805F_41C3_F3A70F1424E8",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "- content"
 },
 "height": "75%",
 "propagateClick": false,
 "layout": "horizontal",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "id": "Container_5C7DCB10_4F38_571F_41B6_A2C80BEB0DB6",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_5C7DEB11_4F38_5701_41D1_BD9BEF92F61B",
 "scrollBarColor": "#000000",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 8,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_5C467B11_4F38_5701_41BD_6ADABBF10640",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "GIMNASIO",
 "borderRadius": 0,
 "height": 36,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_5C461B12_4F38_5703_41A5_2B58A57259CB",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 23,
 "paddingTop": 0,
 "label": "COWORKING",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 18)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "ZONA DE NIÑOS",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_5C463B13_4F38_5701_41D3_7F808639BD58",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "ZONA DE NI\u00d1OS",
 "borderRadius": 0,
 "height": 36,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_5C47EB13_4F38_5701_41D0_849C58570FD5",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "SUM",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 19)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_5C478B14_4F38_5707_41B7_E567FC5BFF03",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "PLAZUELA",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 21)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_5C47BB14_4F38_5707_41C5_004237DF4BC7",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "ZONA DE PARRILLAS",
 "borderRadius": 0,
 "height": 36,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_5C475B14_4F38_5707_41B5_45CB509F3FEC",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "TERRAZA",
 "borderRadius": 0,
 "height": 36,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_5C470B15_4F38_5701_41C8_8315EAA43F47",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "scrollBarWidth": 10,
 "id": "Container_5CB12513_4F38_7300_41C1_CF46A5DB681C",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_5CBEF513_4F38_7300_41CD_FE4054DD71DB",
 "scrollBarColor": "#000000",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 8,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_5CBE8514_4F38_7300_41C7_4C2B003C16FE",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "SALA",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_5CBEA514_4F38_7300_41C4_E7D746E7D487",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 23,
 "paddingTop": 0,
 "label": "COCINA",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 3)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "LAVANDERIA",
 "layout": "horizontal",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_5CBE4515_4F38_7300_41D1_1CA43C43E7F8",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "LAVANDERIA",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 9)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_5CBE1515_4F38_7300_41B8_0BE61EE2A2AC",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "DORMITORIO PRINCIPAL",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 4)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_5CBE2516_4F38_7300_41B3_266EC752AC75",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "DORMITORIO NI\u00d1O",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_5CBFF516_4F38_7300_41C0_01CB82BCD11E",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "DORMITORIO NI\u00d1A",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 5)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_5CBF9517_4F38_7300_41BB_8710868B4E0A",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "BA\u00d1O PRINCIPAL",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 7)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_5CBFA517_4F38_7300_41CC_D4157FF5A756",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "BA\u00d1O SECUNDARIO",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 8)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "id": "Container_5CE0FDFC_4F38_7300_41BA_B59158C97EA7",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_5CE09DFC_4F38_7300_41C5_496587AD3AF4",
 "scrollBarColor": "#000000",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 8,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_5CE04DFD_4F38_7300_41CF_9AA175DB4918",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "SALA",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 10)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_5CE02DFD_4F38_7300_41AC_5CCE35E28CCE",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 23,
 "paddingTop": 0,
 "label": "COCINA",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "layout": "horizontal",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_5CE1FDFE_4F38_7300_41CB_C0EFC8517F56",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "LAVANDERIA",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 9)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_5CE1BDFE_4F38_7300_41AF_930026BA5A6C",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "DORMITORIO",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 13)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_5CE17DFF_4F38_7300_41C6_8F855B436216",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "ESTUDIO",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 12)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_5CE13DFF_4F38_7300_4168_8B08D53E7557",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "BA\u00d1O PRINCIPAL",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 15)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_5CEEFE00_4F38_7100_41C4_47D712DA1F96",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "BA\u00d1O SECUNDARIO",
 "borderRadius": 0,
 "height": 36,
 "click": "this.mainPlayList.set('selectedIndex', 16)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_5CEEAE00_4F38_7100_41CA_772C2B0C9596",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "scrollBarWidth": 10,
 "id": "Container_5CDED17E_4F38_5303_41CD_E7D6CF4384E1",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "layout": "absolute",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Container_5CDE817F_4F38_5301_41CB_1573369D710F",
 "scrollBarColor": "#000000",
 "shadow": false,
 "overflow": "scroll",
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 8,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "shadowSpread": 1,
 "id": "Button_5CDE217F_4F38_5301_41C6_96F7478E4BCD",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "rollOverShadowBlurRadius": 18,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "shadowSpread": 1,
 "id": "Button_5CDFE180_4F38_53FF_41BA_C2AE8CF20676",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 23,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "shadowSpread": 1,
 "id": "Button_5CDFA180_4F38_53FF_41B1_A82E7A427261",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "shadowSpread": 1,
 "id": "Button_5CDF7181_4F38_5301_41D0_9F8175F5BACF",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "shadowSpread": 1,
 "id": "Button_5CDF2181_4F38_5301_419E_50D4A975C358",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "shadowSpread": 1,
 "id": "Button_5CDCF182_4F38_5303_41BA_3B4FB28D5CC6",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "borderRadius": 0,
 "height": 36,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "shadowSpread": 1,
 "id": "Button_5CDCD187_4F38_5301_41D2_1D9369EA7682",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "shadowSpread": 1,
 "id": "Button_5CDC6188_4F38_530F_416D_D8C2C6CAD624",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "class": "Button",
 "width": "100%",
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.3,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "borderRadius": 0,
 "height": 36,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "paddingLeft": 20,
 "cursor": "hand",
 "layout": "horizontal"
},
{
 "transparencyActive": true,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "shadow": false,
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, true, 0, null, null, false)",
 "borderRadius": 0,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Info"
 },
 "visible": false,
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png"
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "shadow": false,
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, true, 0, null, null, false)",
 "borderRadius": 0,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Thumblist"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png"
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "shadow": false,
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, true, 0, null, null, false)",
 "borderRadius": 0,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Location"
 },
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png"
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "shadow": false,
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, true, 0, null, null, false)",
 "borderRadius": 0,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "visible": false,
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png"
},
{
 "transparencyActive": true,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "shadow": false,
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, true, 0, null, null, false)",
 "borderRadius": 0,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Floorplan"
 },
 "visible": false,
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png"
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "shadow": false,
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "borderRadius": 0,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Realtor"
 },
 "visible": false,
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png"
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "shadow": false,
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Video"
 },
 "visible": false,
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png"
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "shadow": false,
 "width": 50,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "class": "IconButton",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "borderRadius": 0,
 "height": 50,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton --"
 },
 "visible": false,
 "propagateClick": false,
 "paddingLeft": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png"
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_17529AC5_57D1_805F_41BD_C64BF1F259C6",
 "shadow": false,
 "borderSize": 0,
 "class": "Image",
 "width": "25%",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "url": "skin/Image_17529AC5_57D1_805F_41BD_C64BF1F259C6.jpg",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "agent photo"
 },
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "paddingLeft": 0
},
{
 "id": "HTMLText_17528AC5_57D1_805F_41CC_502F9EE91657",
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "width": "75%",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "propagateClick": false
}],
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.Container_691B6C80_7506_9D4B_41B4_89FD1E7BCC23",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821",
  "this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
  "this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
  "this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
  "this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08",
  "this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "shadow": false,
 "mobileMipmappingEnabled": false,
 "overflow": "visible",
 "borderSize": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "existsKey": function(key){  return key in window; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; }
 },
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "defaultVRPointer": "laser",
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "downloadEnabled": false,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "width": "100%",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "data": {
  "name": "Player468"
 },
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "layout": "absolute",
 "paddingLeft": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
