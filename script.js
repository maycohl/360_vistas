(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "height": "100%",
 "id": "rootPlayer",
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
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -105.44,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0A667E9F_1BD4_C564_41B8_9DF95726767C",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -39.49,
  "pitch": 2.76
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_09A89F9D_1BD4_C365_4172_B02CBC76D9B6",
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 137,
  "yaw": 0.66,
  "pitch": 0.64
 },
 "manualRotationSpeed": 408,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_camera",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_t.jpg"
  }
 ],
 "label": "BA\u00d1O PRINCIPAL 1201",
 "id": "panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D4E86805_CC0F_E895_41D5_81A209D63596"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 129.17,
   "distance": 1,
   "backwardYaw": 171.21,
   "panorama": "this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_t.jpg",
 "hfovMax": 135
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 126,
  "yaw": 141.13,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_09CE0F41_1BD4_C3DC_41A9_4971B8D0F3A7",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": -64.51,
  "pitch": 0
 },
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0,
 "class": "PanoramaCamera",
 "id": "camera_08FD4076_1BD4_DDA7_41A1_5C688CFEB298",
 "manualRotationSpeed": 400
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": -1.51,
  "pitch": -3.99
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_camera",
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": 0,
  "pitch": 0
 },
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0,
 "class": "PanoramaCamera",
 "id": "camera_14B49124_1BD4_DF5B_41A4_A899277855ED",
 "manualRotationSpeed": 400
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_camera",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 141,
  "yaw": -41.5,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0974FFEB_1BD4_C2AD_4197_3C99D8E2F50B",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_t.jpg"
  }
 ],
 "label": "DORMITORIO NI\u00d1A 1201",
 "id": "panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_74DF845B_6C1C_4D4B_41D8_34EF52ACD755"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 147.97,
   "distance": 1,
   "backwardYaw": 149.94,
   "panorama": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_t.jpg",
 "hfovMax": 139
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_t.jpg"
  }
 ],
 "label": "SALA 607",
 "id": "panorama_14E38F22_1BAD_C35F_4187_65C07954055A",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_14E3BF23_1BAD_C35D_41A5_A61C663B9712",
  "this.overlay_14E3AF23_1BAD_C35D_419B_7FDEE03C6618",
  "this.overlay_14E27F23_1BAD_C35D_41B8_53F39E1AB0FB",
  "this.overlay_14E21F23_1BAD_C35D_41BA_293B1955A81A",
  "this.overlay_14E23F23_1BAD_C35D_41B9_E0BABFF41CDB",
  "this.overlay_14E2DF23_1BAD_C35D_41B0_BE5F8334579C",
  "this.overlay_14E2CF23_1BAD_C35D_4166_5A0061672D45",
  "this.overlay_14E2EF23_1BAD_C35D_41B8_F0A7C42DA999",
  "this.overlay_14E28F23_1BAD_C35D_41B8_75AA2F7C3CB0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -141.02,
   "distance": 1,
   "backwardYaw": -0.26,
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -121.32,
   "distance": 1,
   "backwardYaw": -0.26,
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 115.49,
   "distance": 1,
   "backwardYaw": -159.99,
   "panorama": "this.panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 74.03,
   "distance": 1,
   "backwardYaw": -141.98,
   "panorama": "this.panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 97.8,
   "distance": 1,
   "backwardYaw": 119.15,
   "panorama": "this.panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 89.5,
   "distance": 1,
   "backwardYaw": -38.87,
   "panorama": "this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 82.29,
   "distance": 1,
   "backwardYaw": -127.08,
   "panorama": "this.panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_t.jpg",
 "hfovMax": 125
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 137,
  "yaw": 9.04,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0ABAAE52_1BD4_C5FC_41A8_F32A30980ECE",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_t.jpg"
  }
 ],
 "label": "BA\u00d1O SECUNDARIO 1201",
 "id": "panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D5749469_CDFA_589A_41D2_F5BBB7F7B06C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 138.5,
   "distance": 1,
   "backwardYaw": 74.56,
   "panorama": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_t.jpg",
 "hfovMax": 143
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0/f/0/{row}_{column}.jpg",
      "colCount": 19,
      "width": 9728,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 19,
      "height": 9728
     },
     {
      "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0/f/1/{row}_{column}.jpg",
      "colCount": 10,
      "width": 5120,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 10,
      "height": 5120
     },
     {
      "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0/f/2/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0/f/3/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0/f/4/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0/f/5/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_t.jpg"
  }
 ],
 "label": "EXTERIOR",
 "id": "panorama_BF2C9A17_EED2_F502_41B0_209AA8501663",
 "class": "Panorama",
 "overlays": [
  "this.overlay_BF2C8A18_EED2_F50E_41E2_83692CEFCD47"
 ],
 "partial": true,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  }
 ],
 "hfov": 30,
 "pitch": 0,
 "vfov": 30,
 "thumbnailUrl": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_t.jpg",
 "hfovMax": 45.67
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_t.jpg"
  }
 ],
 "label": "SUM",
 "id": "panorama_C539447A_C81D_B3A9_41E4_35662EC989DF",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_D7F56A71_CC16_688A_41D8_402CB7403AA7",
  "this.overlay_F1DBA1DD_EB31_5706_41E0_FB1583A76B81",
  "this.overlay_F04A9C89_EB57_2D0E_41D3_E7D77A83DA0E",
  "this.overlay_CA6176D5_EAFF_7D06_41EA_11D155BBAE17",
  "this.overlay_CB8674F5_EAFF_3D06_41E6_B6D74C5734B9",
  "this.overlay_CAC4D938_EAFF_370E_41E5_7BECEF82DCCC"
 ],
 "partial": false,
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
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_t.jpg",
 "hfovMax": 133
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": -90.5,
  "pitch": 0
 },
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0,
 "class": "PanoramaCamera",
 "id": "camera_144BD160_1BD4_DFDB_41B1_C5A0BECCEA3B",
 "manualRotationSpeed": 400
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 126,
  "yaw": 50.5,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0AFB1DE0_1BD4_C6DC_41B9_CA260FD0A04D",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 137,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_camera",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_t.jpg"
  }
 ],
 "label": "DORMITORIO 607",
 "id": "panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_DE1CD06B_CC1F_D89D_41E5_93ABBC9AD6C4",
  "this.overlay_DDA5C3B9_CC1E_5FFD_41CD_B2290496D441"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -129.5,
   "distance": 1,
   "backwardYaw": 114.66,
   "panorama": "this.panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -38.87,
   "distance": 1,
   "backwardYaw": 89.5,
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_t.jpg",
 "hfovMax": 132
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -81.31,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_08DE9057_1BD4_DDE5_41A3_442B884E1891",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_t.jpg"
  }
 ],
 "label": "BA\u00d1O SECUNDARIO 607",
 "id": "panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_DB907139_CC0A_D8FD_41C7_EA0DABB5858C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 119.15,
   "distance": 1,
   "backwardYaw": 97.8,
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_t.jpg",
 "hfovMax": 132
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 102.86,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_14A430F7_1BD4_DEA5_416E_7FD198F38778",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": -82.2,
  "pitch": 0
 },
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0,
 "class": "PanoramaCamera",
 "id": "camera_0A77CEB8_1BD4_C2AC_4199_DEC1BCD35938",
 "manualRotationSpeed": 400
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_camera",
 "automaticZoomSpeed": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_t.jpg"
  }
 ],
 "label": "LAVANDERIA 1201",
 "id": "panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_7A5B32AB_6C14_C5F4_41BC_EF28F0DCE2F4",
  "this.overlay_DC94E2CA_CC36_399E_41B7_A2832A86E97D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -77.14,
   "distance": 1,
   "backwardYaw": 38.44,
   "panorama": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -80.94,
   "distance": 1,
   "backwardYaw": 38.44,
   "panorama": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_t.jpg",
 "hfovMax": 131
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 129,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_camera",
 "automaticZoomSpeed": 0
},
{
 "label": "Album de Fotos LOBBY",
 "id": "album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9",
 "thumbnailUrl": "media/album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9_t.png",
 "class": "PhotoAlbum",
 "playList": "this.album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9_AlbumPlayList"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -95.38,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_08C09037_1BD4_DDA5_41B2_F71B6560C5CC",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": 38.98,
  "pitch": 0
 },
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0,
 "class": "PanoramaCamera",
 "id": "camera_0A49DE6B_1BD4_C5AC_41A7_65ACAA356E9B",
 "manualRotationSpeed": 400
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_t.jpg"
  }
 ],
 "label": "BA\u00d1O PRINCIPAL 607",
 "id": "panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_DC81D5D1_CC0A_3B8A_41C3_D2962D0C6F54"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 114.66,
   "distance": 1,
   "backwardYaw": -129.5,
   "panorama": "this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_camera",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": -6.47,
  "pitch": -0.49
 },
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0,
 "class": "PanoramaCamera",
 "id": "panorama_14E38F22_1BAD_C35F_4187_65C07954055A_camera",
 "manualRotationSpeed": 400
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_t.jpg"
  }
 ],
 "label": "COCINA 607",
 "id": "panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F9F57609_EAF1_7D0E_41BC_902E1B353526",
  "this.overlay_FEEAA098_EAFE_D50E_41E7_2F6A9CA4D688"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -141.98,
   "distance": 1,
   "backwardYaw": 74.03,
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_t.jpg",
 "hfovMax": 137
},
{
 "duration": 5000,
 "label": "LOBBY",
 "id": "album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9_0",
 "thumbnailUrl": "media/album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9_0_t.jpg",
 "width": 5000,
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2500
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -2.87,
  "pitch": -2.25
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_camera",
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": 15.61,
  "pitch": -24.8
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_08EC5067_1BD4_DDA5_41AF_CE222BF3F833",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 122,
  "yaw": -172.38,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_14AE3116_1BD4_DF67_4185_7942EA718C60",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0AE7BDC1_1BD4_C6DC_418D_E8374CCE2FA7",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_BF2C9A17_EED2_F502_41B0_209AA8501663",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_camera"
  },
  {
   "media": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_camera"
  },
  {
   "media": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_camera"
  },
  {
   "media": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_camera"
  },
  {
   "media": "this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_camera"
  },
  {
   "media": "this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_camera"
  },
  {
   "media": "this.panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_camera"
  },
  {
   "media": "this.panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_camera"
  },
  {
   "media": "this.panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_camera"
  },
  {
   "media": "this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_camera"
  },
  {
   "media": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A_camera"
  },
  {
   "media": "this.panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 11, 12)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_camera"
  },
  {
   "media": "this.panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 12, 13)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_camera"
  },
  {
   "media": "this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 13, 14)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_camera"
  },
  {
   "media": "this.panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 14, 15)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_camera"
  },
  {
   "media": "this.panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 15, 16)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_camera"
  },
  {
   "media": "this.panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 16, 17)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_camera"
  },
  {
   "media": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 17, 18)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_camera"
  },
  {
   "media": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 18, 19)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_camera"
  },
  {
   "media": "this.panorama_C539447A_C81D_B3A9_41E4_35662EC989DF",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 19, 20)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_camera"
  },
  {
   "media": "this.panorama_31F7D699_137D_BA1B_4194_3C8AB767D613",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 20, 21)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_camera"
  },
  {
   "media": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 21, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_camera"
  }
 ],
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 133,
  "yaw": 70.47,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_09671FDB_1BD4_C2ED_41B8_7105558243B2",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -136.74,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0912E00A_1BD4_DD6F_41A5_0B3DE6F529E9",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 133,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_camera",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 20.01,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0A23FF05_1BD4_C364_41B7_7FB41DBD7E39",
 "automaticZoomSpeed": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_t.jpg"
  }
 ],
 "label": "plazuela2",
 "id": "panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7",
 "hfovMin": "150%",
 "class": "Panorama",
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
 ],
 "partial": false,
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
   "panorama": "this.panorama_31F7D699_137D_BA1B_4194_3C8AB767D613"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_t.jpg",
 "hfovMax": 137
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -31.22,
  "pitch": -0.92
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_14B87133_1BD4_DFBD_41B3_9499FFA1FC6C",
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 133,
  "yaw": -50.83,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_08CEA047_1BD4_DDE5_41B6_542103B04268",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9"
  }
 ],
 "id": "playList_0B176D6D_1BD4_C7A4_4117_F913031DC6E8"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_camera",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 137,
  "yaw": 18.02,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_09052FFA_1BD4_C2AF_417C_46AC2165F3E6",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": 5.11,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0A9DFE1F_1BD4_C564_41BB_AF38814AFD05",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 102.86,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_088DE086_1BD4_DD67_4197_693E34EF8BCF",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 136,
  "yaw": -32.03,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0922D019_1BD4_DD6D_417C_43FB5E5C314E",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -37.65,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_14BE6143_1BD4_DFDD_41B5_B81E9495D693",
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 141,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_camera",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -38.57,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_09ECAF60_1BD4_C3DC_417D_DCC237B59D14",
 "automaticZoomSpeed": 0
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 136,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_camera",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 137,
  "yaw": -141.56,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_09B8FFAD_1BD4_C2A5_4172_B6B14E74FBE4",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 122,
  "yaw": 179.74,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0A058ED1_1BD4_C2FC_41AF_7DD17AB2BD06",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 133,
  "yaw": 90.98,
  "pitch": -1.86
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_camera",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "class": "PlayList",
 "items": [
  "this.PanoramaPlayListItem_0B2A9D7A_1BD4_C7AC_41B8_605BEB20693E",
  {
   "media": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_camera"
  },
  {
   "media": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_camera"
  },
  {
   "media": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_camera"
  },
  {
   "media": "this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_camera"
  },
  {
   "media": "this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_camera"
  },
  {
   "media": "this.panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_camera"
  },
  {
   "media": "this.panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_camera"
  },
  {
   "media": "this.panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_camera"
  },
  {
   "media": "this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_camera"
  },
  {
   "media": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A_camera"
  },
  {
   "media": "this.panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_camera"
  },
  {
   "media": "this.panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_camera"
  },
  {
   "media": "this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_camera"
  },
  {
   "media": "this.panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_camera"
  },
  {
   "media": "this.panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_camera"
  },
  {
   "media": "this.panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_camera"
  },
  {
   "media": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_camera"
  },
  {
   "media": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_camera"
  },
  {
   "media": "this.panorama_C539447A_C81D_B3A9_41E4_35662EC989DF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_camera"
  },
  {
   "media": "this.panorama_31F7D699_137D_BA1B_4194_3C8AB767D613",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_camera"
  },
  {
   "media": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": -60.85,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0A3E1F32_1BD4_C3BC_4185_517921534988",
 "automaticZoomSpeed": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_t.jpg"
  }
 ],
 "label": "DORMITORIO NI\u00d1O 1201",
 "id": "panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_74A3E056_6C1C_C55C_41D0_57D95575C25D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -109.53,
   "distance": 1,
   "backwardYaw": 98.69,
   "panorama": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_t.jpg",
 "hfovMax": 133
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_t.jpg"
  }
 ],
 "label": "COMEDOR 1201",
 "id": "panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E",
 "hfovMin": "150%",
 "class": "Panorama",
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
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -174.89,
   "distance": 1,
   "backwardYaw": -0.71,
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
   "yaw": 98.69,
   "distance": 1,
   "backwardYaw": -109.53,
   "panorama": "this.panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 74.56,
   "distance": 1,
   "backwardYaw": 138.5,
   "panorama": "this.panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 11,
   "distance": 1,
   "backwardYaw": -161.98,
   "panorama": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 84.62,
   "distance": 1,
   "backwardYaw": 43.26,
   "panorama": "this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 149.94,
   "distance": 1,
   "backwardYaw": 147.97,
   "panorama": "this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 23,
  "yaw": -0.96,
  "pitch": -9.27
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -0.23,
    "path": "shortest",
    "yawSpeed": 0.02
   },
   {
    "easing": "linear",
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 2.78,
    "path": "shortest",
    "yawSpeed": 0.02
   },
   {
    "easing": "cubic_out",
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 3.5,
    "path": "shortest",
    "yawSpeed": 0.02
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "manualZoomSpeed": 5,
 "class": "PanoramaCamera",
 "id": "panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_camera",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_t.jpg"
  }
 ],
 "label": "ESTUDIO 607",
 "id": "panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_DE20EF16_CCFA_68B6_41E4_B3CFA4D26429"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -127.08,
   "distance": 1,
   "backwardYaw": 82.29,
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_t.jpg",
 "hfovMax": 137
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0ADC8DB1_1BD4_C6BC_4190_49E47302019B",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_t.jpg"
  }
 ],
 "label": "LOBBY",
 "id": "panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2",
 "hfovMin": "150%",
 "class": "Panorama",
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
 ],
 "partial": false,
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
   "panorama": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_t.jpg",
 "hfovMax": 134
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 122,
  "yaw": 179.74,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0A121EEB_1BD4_C2AC_418B_86DDAAD1454D",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_t.jpg"
  }
 ],
 "label": "DORMITORIO PRINCIPAL 1201",
 "id": "panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_62D24D5A_6D0F_8ED4_41D2_8EA790297809",
  "this.overlay_0F47D013_1364_75EE_418D_CD517DB9A253"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 43.26,
   "distance": 1,
   "backwardYaw": 84.62,
   "panorama": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 171.21,
   "distance": 1,
   "backwardYaw": 129.17,
   "panorama": "this.panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -8.79,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0A598E85_1BD4_C564_4199_6792FFC38079",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -169,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_14ABC107_1BD4_DF65_41B7_8F9ACAC48EAF",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 136,
  "yaw": -98.27,
  "pitch": -7.35
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0AAA2E38_1BD4_C5AD_41B5_C145A519BF12",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_t.jpg"
  }
 ],
 "label": "COWORKING",
 "id": "panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_F2E8C2C3_EB31_3501_41D5_8375A4D3D2CA",
  "this.overlay_F1090237_EB33_5502_41EA_729358860A63",
  "this.overlay_F108E775_EB37_FB06_41E9_289F4ADD97AC",
  "this.overlay_F429BA47_EAF2_F502_41C8_EC3AE8D9B669",
  "this.overlay_F490E7EC_EAF3_5B06_41EB_E107F9BDAC3B",
  "this.overlay_F4794F52_EAF1_2B02_41B8_B98F09505770",
  "this.overlay_0DE206EF_111F_BA36_4190_34919000FC2A",
  "this.overlay_0F4A524B_1364_FA7F_41B0_C5C5E2D88BC5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
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
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_t.jpg",
 "hfovMax": 145
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 1.03,
  "pitch": 3.32
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_camera",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 137,
  "yaw": 52.92,
  "pitch": 0
 },
 "manualRotationSpeed": 408,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_09DE9F50_1BD4_C3FC_41B3_B404934EE122",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": -97.71,
  "pitch": 0
 },
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0,
 "class": "PanoramaCamera",
 "id": "camera_0930B028_1BD4_DDAB_41BB_7D28D6520C2C",
 "manualRotationSpeed": 400
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_t.jpg"
  }
 ],
 "label": "plazuela",
 "id": "panorama_31F7D699_137D_BA1B_4194_3C8AB767D613",
 "hfovMin": "150%",
 "class": "Panorama",
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
 ],
 "partial": false,
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
   "panorama": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 122,
  "yaw": -2.59,
  "pitch": -0.65
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_camera",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 130,
  "yaw": -30.06,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_098ABF7F_1BD4_C3A4_417B_55F526BA0217",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonNext": "this.IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
 "buttonPrevious": "this.IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_camera",
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -41.33,
  "pitch": -0.92
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0AF04DD0_1BD4_C6FC_41B2_653777DD7C5B",
 "automaticZoomSpeed": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_t.jpg"
  }
 ],
 "label": "COCINA 1201",
 "id": "panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_7A38664E_6C74_4D4C_41CB_D59E47BBBC20",
  "this.overlay_74A81DD8_6C1C_5F54_41D3_24FE58A2E92E",
  "this.overlay_74A9239E_6C14_CBCC_41D9_A48D01593DE6",
  "this.overlay_AFEB06B1_BE29_5923_41DE_5244D7CCB860"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 38.44,
   "distance": 1,
   "backwardYaw": -77.14,
   "panorama": "this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 39.5,
   "distance": 1,
   "backwardYaw": -77.14,
   "panorama": "this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -161.98,
   "distance": 1,
   "backwardYaw": 11,
   "panorama": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -170.96,
   "distance": 1,
   "backwardYaw": 7.62,
   "panorama": "this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_t.jpg",
 "hfovMax": 137
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_t.jpg"
  }
 ],
 "label": "SALA 1201",
 "id": "panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6",
 "class": "Panorama",
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
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -0.71,
   "distance": 1,
   "backwardYaw": -174.89,
   "panorama": "this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 7.62,
   "distance": 1,
   "backwardYaw": -170.96,
   "panorama": "this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.26,
   "distance": 1,
   "backwardYaw": -141.02,
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_t.jpg",
 "hfovMax": 122
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 132,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_camera",
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -38.57,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_099AEF8E_1BD4_C367_41B6_DC29CF67C3CB",
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 122,
  "yaw": 179.29,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0956CFCC_1BD4_C2EB_41B6_6B01B939662F",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 118,
  "yaw": -105.97,
  "pitch": 0
 },
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0,
 "class": "PanoramaCamera",
 "id": "camera_0A914DFE_1BD4_C6A4_4196_829B9D5B637B",
 "manualRotationSpeed": 400
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 115,
  "yaw": -38.57,
  "pitch": -0.92
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_09FCEF6F_1BD4_C3A4_41B4_2DCC0C8D314A",
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 137,
  "yaw": -141.56,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_09492FBC_1BD4_C2AB_41AC_7BAB5B166E78",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.43,
  "pitch": -5.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0A87DDEF_1BD4_C6A4_41B4_8401AACDCDF9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": 38.02,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0A306F1F_1BD4_C364_41BA_B4D9439B3263",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 131,
  "yaw": -157.96,
  "pitch": 3.67
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_0AD36DA2_1BD4_C75C_417E_C05C4D23934D",
 "automaticZoomSpeed": 0
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 126,
  "yaw": 0,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_camera",
 "automaticRotationSpeed": 0,
 "automaticZoomSpeed": 0
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_t.jpg"
  }
 ],
 "label": "LAVANDERIA 607",
 "id": "panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7",
 "hfovMin": "150%",
 "class": "Panorama",
 "overlays": [
  "this.overlay_FE9B449F_EAF1_DD02_41E6_53D32922EA74"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -159.99,
   "distance": 1,
   "backwardYaw": 115.49,
   "panorama": "this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_t.jpg",
 "hfovMax": 140
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 129,
  "yaw": -65.34,
  "pitch": 0
 },
 "manualRotationSpeed": 400,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "id": "camera_1445B152_1BD4_DFFF_41A9_4D2609B2387A",
 "automaticZoomSpeed": 0
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "toolTipPaddingTop": 7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "progressBarOpacity": 1,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_691B6C80_7506_9D4B_41B4_89FD1E7BCC23",
 "left": "0%",
 "width": 330,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL 5"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6EC9D199_4F7D_CE01_41CD_90869FADC821",
 "left": "0%",
 "children": [
  "this.Container_6ECE8198_4F7D_CE0F_41B6_C7C8D7E8FF58",
  "this.Container_6EC9F199_4F7D_CE01_41C8_1A8AEA0A382B"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "---INFO photo"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
 "left": "0%",
 "children": [
  "this.Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "---PANORAMA LIST"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
 "left": "0%",
 "children": [
  "this.Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
  "this.Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "---LOCATION"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
 "left": "0%",
 "children": [
  "this.Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "---PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08",
 "left": "0%",
 "children": [
  "this.Container_6FD227C1_4F7F_B27E_41A4_4340D943D7A5"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "---FLOORPLAN"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8",
 "left": "0%",
 "children": [
  "this.Container_17522AC5_57D1_805F_41CA_96B265C364E4",
  "this.Container_17516AC5_57D1_805F_41CA_8E754787B1A2"
 ],
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "--REALTOR"
 },
 "shadow": false,
 "visible": false,
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, false, 0, null, null, false)"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 129.17,
   "hfov": 14.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.35
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E, this.camera_0A598E85_1BD4_C564_4199_6792FFC38079); this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "DORMITORIO PRINCIPAL"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8D4CF21_F018_F1FD_41E5_8DCC81B00E78",
   "pitch": -0.35,
   "yaw": 129.17,
   "hfov": 14.4,
   "distance": 100
  }
 ],
 "id": "overlay_D4E86805_CC0F_E895_41D5_81A209D63596",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 147.97,
   "hfov": 10.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.12
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E, this.camera_098ABF7F_1BD4_C3A4_417B_55F526BA0217); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "SALA COMEDOR\u000a"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E82B7F21_F018_F1FD_4189_5DD4BE2C25BE",
   "pitch": -4.12,
   "yaw": 147.97,
   "hfov": 10.77,
   "distance": 100
  }
 ],
 "id": "overlay_74DF845B_6C1C_4D4B_41D8_34EF52ACD755",
 "data": {
  "label": "SALA COMEDOR"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.03,
   "hfov": 8.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.31
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C, this.camera_0A306F1F_1BD4_C364_41BA_B4D9439B3263); this.mainPlayList.set('selectedIndex', 11)",
   "toolTip": "COCINA "
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0A8C78D4_1BB3_CEE4_41A0_9612AA57B534",
   "pitch": -8.31,
   "yaw": 74.03,
   "hfov": 8.55,
   "distance": 100
  }
 ],
 "id": "overlay_14E3BF23_1BAD_C35D_41A5_A61C663B9712",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.29,
   "hfov": 8.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.27
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA, this.camera_09DE9F50_1BD4_C3FC_41B3_B404934EE122); this.mainPlayList.set('selectedIndex', 12)",
   "toolTip": "ESTUDIO"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0A8C18D4_1BB3_CEE4_418C_82279F526AFB",
   "pitch": -3.27,
   "yaw": 82.29,
   "hfov": 8.63,
   "distance": 100
  }
 ],
 "id": "overlay_14E3AF23_1BAD_C35D_419B_7FDEE03C6618",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.5,
   "hfov": 8.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.16
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965, this.camera_09CE0F41_1BD4_C3DC_41A9_4971B8D0F3A7); this.mainPlayList.set('selectedIndex', 13)",
   "toolTip": "DORMITORIO"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0A8CB8D4_1BB3_CEE4_419F_243E94F6B4D8",
   "pitch": 4.16,
   "yaw": 89.5,
   "hfov": 8.62,
   "distance": 100
  }
 ],
 "id": "overlay_14E27F23_1BAD_C35D_41B8_53F39E1AB0FB",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.8,
   "hfov": 8.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.29
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198, this.camera_0A3E1F32_1BD4_C3BC_4185_517921534988); this.mainPlayList.set('selectedIndex', 16)",
   "toolTip": "BA\u00d1O SECUNDARIO"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0A8D68D5_1BB3_CEE4_41B1_DEE6D9DC2895",
   "pitch": -3.29,
   "yaw": 97.8,
   "hfov": 8.63,
   "distance": 100
  }
 ],
 "id": "overlay_14E21F23_1BAD_C35D_41BA_293B1955A81A",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 115.49,
   "hfov": 8.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.17
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7, this.camera_0A23FF05_1BD4_C364_41B7_7FB41DBD7E39); this.mainPlayList.set('selectedIndex', 14)",
   "toolTip": "LAVANDERIA\u000a"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0A8D28D5_1BB3_CEE4_41AA_5D77B0CAC28B",
   "pitch": -8.17,
   "yaw": 115.49,
   "hfov": 8.55,
   "distance": 100
  }
 ],
 "id": "overlay_14E23F23_1BAD_C35D_41B9_E0BABFF41CDB",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -141.05,
   "hfov": 10.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.75
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2, this.camera_09ECAF60_1BD4_C3DC_417D_DCC237B59D14); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0A8DA8D6_1BB3_CEE4_4179_E6E3291D3F44",
   "pitch": -8.75,
   "yaw": -141.05,
   "hfov": 10.67,
   "distance": 100
  }
 ],
 "id": "overlay_14E2DF23_1BAD_C35D_41B0_BE5F8334579C",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -141.02,
   "hfov": 10.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.88
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6, this.camera_0A058ED1_1BD4_C2FC_41AF_7DD17AB2BD06); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0A8E58D6_1BB3_CEE4_417B_9E3BD4188316",
   "pitch": 4.88,
   "yaw": -141.02,
   "hfov": 10.76,
   "distance": 100
  }
 ],
 "id": "overlay_14E2CF23_1BAD_C35D_4166_5A0061672D45",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.02,
   "hfov": 13.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_9_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.96
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2, this.camera_09FCEF6F_1BD4_C3A4_41B4_2DCC0C8D314A); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 192,
      "height": 52
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.96,
   "yaw": -129.02,
   "hfov": 13.71,
   "distance": 50
  }
 ],
 "id": "overlay_14E2EF23_1BAD_C35D_41B8_F0A7C42DA999",
 "data": {
  "label": "LOBBY"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.32,
   "hfov": 30.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_10_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 104,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.11
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6, this.camera_0A121EEB_1BD4_C2AC_418B_86DDAAD1454D); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 418,
      "height": 64
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.11,
   "yaw": -121.32,
   "hfov": 30.07,
   "distance": 50
  }
 ],
 "id": "overlay_14E28F23_1BAD_C35D_41B8_75AA2F7C3CB0",
 "data": {
  "label": "DEPARTAMENTO 1201"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 138.5,
   "hfov": 18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.86
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E, this.camera_0A667E9F_1BD4_C564_41B8_9DF95726767C); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "SALA"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8D47F22_F018_F1FF_41C0_46229710071B",
   "pitch": 0.86,
   "yaw": 138.5,
   "hfov": 18,
   "distance": 100
  }
 ],
 "id": "overlay_D5749469_CDFA_589A_41D2_F5BBB7F7B06C",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.45,
   "hfov": 7.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.71
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2, this.camera_0AF04DD0_1BD4_C6FC_41B2_653777DD7C5B); this.mainPlayList.set('selectedIndex', 17)",
   "toolTip": "LOBBY\u000a"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_ED08B5CB_F1E1_587F_41D2_00219634E19E",
   "pitch": -10.71,
   "yaw": 0.45,
   "hfov": 7.64,
   "distance": 100
  }
 ],
 "id": "overlay_BF2C8A18_EED2_F50E_41E2_83692CEFCD47",
 "data": {
  "label": "Circle Arrow 05"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.51,
   "hfov": 7.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.54
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2, this.camera_099AEF8E_1BD4_C367_41B6_DC29CF67C3CB); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E7E768A1_F01F_F0FD_41BA_C818D5CD1D12",
   "pitch": -4.54,
   "yaw": -154.51,
   "hfov": 7.18,
   "distance": 100
  }
 ],
 "id": "overlay_D7F56A71_CC16_688A_41D8_402CB7403AA7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.62,
   "hfov": 7.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.58
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E7E7F8A1_F01F_F0FD_41E8_553794C50712",
   "pitch": 3.58,
   "yaw": -154.62,
   "hfov": 7.19,
   "distance": 100
  }
 ],
 "id": "overlay_F1DBA1DD_EB31_5706_41E0_FB1583A76B81",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.29,
   "hfov": 7.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.9
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E7E028A2_F01F_F0FF_41DB_FACE76218688",
   "pitch": 11.9,
   "yaw": -154.29,
   "hfov": 7.05,
   "distance": 100
  }
 ],
 "id": "overlay_F04A9C89_EB57_2D0E_41D3_E7D77A83DA0E",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.88,
   "hfov": 23.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 94,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.88
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 330,
      "height": 56
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.88,
   "yaw": -139.88,
   "hfov": 23.8,
   "distance": 50
  }
 ],
 "id": "overlay_CA6176D5_EAFF_7D06_41EA_11D155BBAE17",
 "data": {
  "label": "DEPARTAMENTO 607"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -138.94,
   "hfov": 24.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 124,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.43
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 350,
      "height": 45
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.43,
   "yaw": -138.94,
   "hfov": 24.71,
   "distance": 50
  }
 ],
 "id": "overlay_CB8674F5_EAFF_3D06_41E6_B6D74C5734B9",
 "data": {
  "label": "DEPARTAMENTO 1201"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.54,
   "hfov": 11.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_7_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 50,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.82
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2, this.camera_09A89F9D_1BD4_C365_4172_B02CBC76D9B6); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 166,
      "height": 53
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.82,
   "yaw": -145.54,
   "hfov": 11.94,
   "distance": 50
  }
 ],
 "id": "overlay_CAC4D938_EAFF_370E_41E5_7BECEF82DCCC",
 "data": {
  "label": "LOBBY"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -38.87,
   "hfov": 14.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.68
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A, this.camera_144BD160_1BD4_DFDB_41B1_C5A0BECCEA3B); this.mainPlayList.set('selectedIndex', 10)",
   "toolTip": "SALA\u000a"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8D0FF26_F018_F1C7_41D1_8E954DFAB433",
   "pitch": 0.68,
   "yaw": -38.87,
   "hfov": 14.4,
   "distance": 100
  }
 ],
 "id": "overlay_DE1CD06B_CC1F_D89D_41E5_93ABBC9AD6C4",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.5,
   "hfov": 14.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.44
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA, this.camera_1445B152_1BD4_DFFF_41A9_4D2609B2387A); this.mainPlayList.set('selectedIndex', 15)",
   "toolTip": "BA\u00d1O PRINCIPAL\u000a"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8D02F26_F018_F1C7_41DB_F52AAF6C6B1B",
   "pitch": -0.44,
   "yaw": -129.5,
   "hfov": 14.4,
   "distance": 100
  }
 ],
 "id": "overlay_DDA5C3B9_CC1E_5FFD_41CD_B2290496D441",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.15,
   "hfov": 18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.14
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A, this.camera_0A77CEB8_1BD4_C2AC_4199_DEC1BCD35938); this.mainPlayList.set('selectedIndex', 10)",
   "toolTip": "SALA\u000a\u000a"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8D11F27_F018_F1C5_41DA_47A0591F4DDB",
   "pitch": -0.14,
   "yaw": 119.15,
   "hfov": 18,
   "distance": 100
  }
 ],
 "id": "overlay_DB907139_CC0A_D8FD_41C7_EA0DABB5858C",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "hfov": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0_HS_0_1_3_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0_HS_0_2_4_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "hfov": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0_HS_0_3_5_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933, this.camera_09B8FFAD_1BD4_C2A5_4172_B6B14E74FBE4); this.mainPlayList.set('selectedIndex', 3)",
   "toolTip": "COCINA\u000a"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7A5B32AB_6C14_C5F4_41BC_EF28F0DCE2F4",
 "data": {
  "label": "COCINA"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.94,
   "hfov": 7.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0_HS_1_0_6_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.87
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933, this.camera_09492FBC_1BD4_C2AB_41AC_7BAB5B166E78); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D4C098F9_CC0A_E97A_41E4_F94762A6D4AA",
   "pitch": -2.87,
   "yaw": -80.94,
   "hfov": 7.19,
   "distance": 100
  }
 ],
 "id": "overlay_DC94E2CA_CC36_399E_41B7_A2832A86E97D",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9_0",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.68",
     "y": "0.56",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_D19B752A_EFF3_5F02_41DB_F81EF7C31DA9_AlbumPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.66,
   "hfov": 9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.4
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965, this.camera_0AFB1DE0_1BD4_C6DC_41B9_CA260FD0A04D); this.mainPlayList.set('selectedIndex', 13)",
   "toolTip": "DORMITORIO"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D4C228F9_CC0A_E97A_41D3_9D5ABB7D4CC0",
   "pitch": -0.4,
   "yaw": 114.66,
   "hfov": 9,
   "distance": 100
  }
 ],
 "id": "overlay_DC81D5D1_CC0A_3B8A_41C3_D2962D0C6F54",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -141.98,
   "hfov": 7.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.9
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A, this.camera_0A914DFE_1BD4_C6A4_4196_829B9D5B637B); this.mainPlayList.set('selectedIndex', 10)",
   "toolTip": "SALA"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_F27D8DE9_EAD3_2F01_41BE_8C6568382C3E",
   "pitch": -8.9,
   "yaw": -141.98,
   "hfov": 7.11,
   "distance": 100
  }
 ],
 "id": "overlay_F9F57609_EAF1_7D0E_41BC_902E1B353526",
 "data": {
  "label": "Circle Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -153.25,
   "hfov": 10.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.63
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "toolTip": "LAVANDERIA"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8D1AF25_F018_F1C5_41E9_067A7609F8D1",
   "pitch": -8.63,
   "yaw": -153.25,
   "hfov": 10.68,
   "distance": 100
  }
 ],
 "id": "overlay_FEEAA098_EAFE_D50E_41E7_2F6A9CA4D688",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.03,
   "hfov": 21.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.41
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_31F7D699_137D_BA1B_4194_3C8AB767D613, this.camera_0A87DDEF_1BD4_C6A4_41B4_8401AACDCDF9); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_316BEE1F_1364_8A17_41AE_75E61AA5FAA9",
   "pitch": -15.41,
   "yaw": -0.03,
   "hfov": 21.17,
   "distance": 100
  }
 ],
 "id": "overlay_0E746D34_137C_8E2A_41B1_41FE8C15F1FE",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.22,
   "hfov": 10.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.49
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_316A6E1F_1364_8A17_41AE_F1487934A9F7",
   "pitch": -18.49,
   "yaw": -49.22,
   "hfov": 10.24,
   "distance": 100
  }
 ],
 "id": "overlay_0E749D34_137C_8E10_41A8_977BF3D8D601",
 "data": {
  "label": "Circle Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.32,
   "hfov": 10.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.81
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_316A8E1F_1364_8A17_416E_808338A8191A",
   "pitch": -1.81,
   "yaw": 85.32,
   "hfov": 10.79,
   "distance": 100
  }
 ],
 "id": "overlay_0E749D3A_137C_8E1E_419C_B041A35F6842",
 "data": {
  "label": "Circle Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.33,
   "hfov": 10.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.87
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_31691E20_1364_8A29_41A1_D57BBD64F793",
   "pitch": -6.87,
   "yaw": -107.33,
   "hfov": 10.72,
   "distance": 100
  }
 ],
 "id": "overlay_0E74BD3A_137C_8E1E_41A1_4B9C2B271AA0",
 "data": {
  "label": "Circle Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.95,
   "hfov": 10.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.55
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_31697E20_1364_8A29_41A1_9848A15A08F0",
   "pitch": -7.55,
   "yaw": -48.95,
   "hfov": 10.71,
   "distance": 100
  }
 ],
 "id": "overlay_0E74DD3A_137C_8E1E_417A_8E444ACCBE4A",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.7,
   "hfov": 10.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.64
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3169FE20_1364_8A29_41A8_17D06BC1AF58",
   "pitch": 3.64,
   "yaw": -48.7,
   "hfov": 10.78,
   "distance": 100
  }
 ],
 "id": "overlay_0E74FD3A_137C_8E1E_4198_2A246C67D223",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.6,
   "hfov": 18.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.38
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 253,
      "height": 70
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.38,
   "yaw": 73.6,
   "hfov": 18.25,
   "distance": 50
  }
 ],
 "id": "overlay_0E731D3A_137C_8E1E_41AE_96079A8E9344",
 "data": {
  "label": "COWORKING"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.12,
   "hfov": 17.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_7_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 73,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.85
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 261,
      "height": 57
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.85,
   "yaw": -34.12,
   "hfov": 17.84,
   "distance": 50
  }
 ],
 "id": "overlay_0E730D3A_137C_8E1E_41AE_C14985A39301",
 "data": {
  "label": "LOBBY"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.01,
   "hfov": 33.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_8_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 122,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.92
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 468,
      "height": 61
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.92,
   "yaw": -26.01,
   "hfov": 33.4,
   "distance": 50
  }
 ],
 "id": "overlay_0E733D3B_137C_8E1E_419A_01318BBB5DA4",
 "data": {
  "label": "DEPARTAMENTO 607"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.86,
   "hfov": 33.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_9_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 106,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.76
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 472,
      "height": 71
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.76,
   "yaw": -25.86,
   "hfov": 33.93,
   "distance": 50
  }
 ],
 "id": "overlay_0E732D3B_137C_8E1E_4165_ED2B285330DE",
 "data": {
  "label": "DEPARTAMENTO 1201"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.18,
   "hfov": 24.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_10_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 76,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.66
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 348,
      "height": 73
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.66,
   "yaw": -87.18,
   "hfov": 24.9,
   "distance": 50
  }
 ],
 "id": "overlay_0E737D3B_137C_8E1E_419E_0DAF2E809B72",
 "data": {
  "label": "ZONA DE NI\u00d1OS"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "media": "this.panorama_BF2C9A17_EED2_F502_41B0_209AA8501663",
 "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "class": "PanoramaPlayListItem",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_0B2A9D7A_1BD4_C7AC_41B8_605BEB20693E",
 "camera": "this.panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_camera"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.53,
   "hfov": 10.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.87
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E, this.camera_08DE9057_1BD4_DDE5_41A3_442B884E1891); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "SALA COMEDOR"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8D49F21_F018_F1FD_41E1_B294F0B5D9CA",
   "pitch": -2.87,
   "yaw": -109.53,
   "hfov": 10.79,
   "distance": 100
  }
 ],
 "id": "overlay_74A3E056_6C1C_C55C_41D0_57D95575C25D",
 "data": {
  "label": "SALA COMEDOR"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.56,
   "hfov": 7.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.19
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10, this.camera_0974FFEB_1BD4_C2AD_4197_3C99D8E2F50B); this.mainPlayList.set('selectedIndex', 8)",
   "toolTip": "BA\u00d1O SECUNDARIO"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E82FCF1D_F018_F1C5_41C2_4819AC47B9A4",
   "pitch": -4.19,
   "yaw": 74.56,
   "hfov": 7.18,
   "distance": 100
  }
 ],
 "id": "overlay_61B0E27C_6D0A_FAD3_41A6_A95CAF5B9EE4",
 "data": {
  "label": "BA\u00d1O SECUNDARIO"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.62,
   "hfov": 7.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.61
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E, this.camera_0912E00A_1BD4_DD6F_41A5_0B3DE6F529E9); this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "DORMITORIO PRINCIPAL"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D4C2A8F5_CC0A_E98A_41D3_078499B4B8E6",
   "pitch": -3.61,
   "yaw": 84.62,
   "hfov": 7.19,
   "distance": 100
  }
 ],
 "id": "overlay_61B0F27C_6D0A_FAD3_41D5_0B44D94F15EB",
 "data": {
  "label": "DORMITORIO PRINCIPAL"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.69,
   "hfov": 7.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.12
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D, this.camera_09671FDB_1BD4_C2ED_41B8_7105558243B2); this.mainPlayList.set('selectedIndex', 6)",
   "toolTip": "DORMITORIO NI\u00d1O"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D4C2D8F6_CC0A_E976_41D9_0789C2B4925C",
   "pitch": -4.12,
   "yaw": 98.69,
   "hfov": 7.18,
   "distance": 100
  }
 ],
 "id": "overlay_61B0A27C_6D0A_FAD3_41DA_8EA44259938C",
 "data": {
  "label": "DORMITORIO NI\u00d1O"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.94,
   "hfov": 7.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.6
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA, this.camera_0922D019_1BD4_DD6D_417C_43FB5E5C314E); this.mainPlayList.set('selectedIndex', 5)",
   "toolTip": "DORMITORIO NI\u00d1A"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D4C2F8F6_CC0A_E976_41CB_98D1C68325D3",
   "pitch": -1.6,
   "yaw": 149.94,
   "hfov": 7.2,
   "distance": 100
  }
 ],
 "id": "overlay_61B0B27C_6D0A_FAD3_41D7_309E6EDAA255",
 "data": {
  "label": "DORMITORIO NI\u00d1A"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11,
   "hfov": 7.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_10_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.44
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933, this.camera_09052FFA_1BD4_C2AF_417C_46AC2165F3E6); this.mainPlayList.set('selectedIndex', 3)",
   "toolTip": "COCINA"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D4C218F6_CC0A_E976_41E3_259B8688BEB2",
   "pitch": -3.44,
   "yaw": 11,
   "hfov": 7.19,
   "distance": 100
  }
 ],
 "id": "overlay_61B1427C_6D0A_FAD3_41B5_667A266A3970",
 "data": {
  "label": "COCINA"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.89,
   "hfov": 7.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_11_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.72
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6, this.camera_0956CFCC_1BD4_C2EB_41B6_6B01B939662F); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "SALA"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D4C248F6_CC0A_E976_41E8_80D520D401E6",
   "pitch": -5.72,
   "yaw": -174.89,
   "hfov": 7.16,
   "distance": 100
  }
 ],
 "id": "overlay_61B1527C_6D0A_FAD3_41D4_96906BD59629",
 "data": {
  "label": "SALA"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.02,
   "hfov": 7.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_14_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.88
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "toolTip": "LAVANDERIA\u000a"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D4C198F7_CC0A_E976_41E3_9E7936786173",
   "pitch": 1.88,
   "yaw": 21.02,
   "hfov": 7.2,
   "distance": 100
  }
 ],
 "id": "overlay_C3EBCEE1_CC0A_698A_41E7_C37F5D364E5E",
 "data": {
  "label": "COCINA"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.32,
   "hfov": 20.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_19_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 95,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.16
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_19_0.png",
      "class": "ImageResourceLevel",
      "width": 285,
      "height": 48
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.16,
   "yaw": -4.32,
   "hfov": 20.53,
   "distance": 50
  }
 ],
 "id": "overlay_0AE93DFB_111C_8E1F_4163_3D9C87D7A5D8",
 "data": {
  "label": "DEPARTAMENTO 607"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.03,
   "hfov": 10.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_20_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 46,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.01
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_20_0.png",
      "class": "ImageResourceLevel",
      "width": 152,
      "height": 52
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.01,
   "yaw": -9.03,
   "hfov": 10.93,
   "distance": 50
  }
 ],
 "id": "overlay_0ACC2FDA_1164_8A1E_41A7_11729B614BDB",
 "data": {
  "label": "LOBBY"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.8,
   "hfov": 7.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_21_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.67
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0DA110C0_111D_B66A_41AA_B2952DDB1E4E",
   "pitch": -3.67,
   "yaw": -18.8,
   "hfov": 7.19,
   "distance": 100
  }
 ],
 "id": "overlay_0C2431F5_11EC_962A_41AD_47EFA1318B20",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.99,
   "hfov": 7.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_22_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.13
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0DA150C1_111D_B66A_41AC_BA71D3A19661",
   "pitch": 4.13,
   "yaw": -18.99,
   "hfov": 7.18,
   "distance": 100
  }
 ],
 "id": "overlay_0C927CE9_11E4_8E3B_41A5_D7522ECAE055",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.08,
   "hfov": 14.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.12
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A, this.camera_0930B028_1BD4_DDAB_41BB_7D28D6520C2C); this.mainPlayList.set('selectedIndex', 10)",
   "toolTip": "SALA "
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8D76F25_F018_F1C5_41DD_433F23FF75DE",
   "pitch": -3.12,
   "yaw": -127.08,
   "hfov": 14.38,
   "distance": 100
  }
 ],
 "id": "overlay_DE20EF16_CCFA_68B6_41E4_B3CFA4D26429",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.36,
   "hfov": 5.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_25_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.57
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CF2731D_11E7_BA1B_41AA_042789824B75",
   "pitch": 4.57,
   "yaw": -51.36,
   "hfov": 5.74,
   "distance": 100
  }
 ],
 "id": "overlay_0E544854_11E4_B669_41A8_81868A70226D",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.29,
   "hfov": 5.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_26_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.39
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_C539447A_C81D_B3A9_41E4_35662EC989DF, this.camera_0AD36DA2_1BD4_C75C_417E_C05C4D23934D); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CF5831D_11E7_BA1B_41AE_802C4A869B02",
   "pitch": -1.39,
   "yaw": -51.29,
   "hfov": 5.76,
   "distance": 100
  }
 ],
 "id": "overlay_0E540854_11E4_B669_416A_FD494E759662",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.36,
   "hfov": 5.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_27_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.27
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7, this.camera_0ADC8DB1_1BD4_C6BC_4190_49E47302019B); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CF5331E_11E7_BA19_41A2_2D28ACA93344",
   "pitch": -7.27,
   "yaw": -51.36,
   "hfov": 5.71,
   "distance": 100
  }
 ],
 "id": "overlay_0E541854_11E4_B669_419A_CAA0EDBFE482",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.14,
   "hfov": 5.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_28_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.7
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CF4B31F_11E7_BA17_4160_C21BF629C624",
   "pitch": -13.7,
   "yaw": -51.14,
   "hfov": 5.6,
   "distance": 100
  }
 ],
 "id": "overlay_0E54C855_11E4_B66B_41AA_566ED8BFA86D",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.07,
   "hfov": 5.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_29_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CF4E31F_11E7_BA17_4195_D06B7EE132A5",
   "pitch": -20,
   "yaw": -51.07,
   "hfov": 5.41,
   "distance": 100
  }
 ],
 "id": "overlay_0E54A855_11E4_B66B_4196_AA093E64A598",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.29,
   "hfov": 5.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_30_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.15
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CF4231F_11E7_BA17_4190_4F55100188DB",
   "pitch": 11.15,
   "yaw": -51.29,
   "hfov": 5.65,
   "distance": 100
  }
 ],
 "id": "overlay_0E548855_11E4_B66B_417D_40F119C223E2",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.21,
   "hfov": 5.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_31_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.16
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CF47320_11E7_BA29_41A6_6CE5F55C30BD",
   "pitch": 17.16,
   "yaw": -51.21,
   "hfov": 5.5,
   "distance": 100
  }
 ],
 "id": "overlay_0E549855_11E4_B66B_41A9_51724539E692",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.97,
   "hfov": 12.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_32_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 54,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.99
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_32_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 51
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.99,
   "yaw": -43.97,
   "hfov": 12.46,
   "distance": 50
  }
 ],
 "id": "overlay_0E556855_11E4_B66B_41A8_F39C43434AEA",
 "data": {
  "label": "COWORKING"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.7,
   "hfov": 6.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_33_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.8
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_33_0.png",
      "class": "ImageResourceLevel",
      "width": 93,
      "height": 49
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.8,
   "yaw": -46.7,
   "hfov": 6.72,
   "distance": 50
  }
 ],
 "id": "overlay_0E557855_11E4_B66B_419E_D491435D6598",
 "data": {
  "label": "SUM"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.71,
   "hfov": 5.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_34_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.37
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CF73321_11E7_BA2B_41A0_534EB6576F6D",
   "pitch": -1.37,
   "yaw": -34.71,
   "hfov": 5.76,
   "distance": 100
  }
 ],
 "id": "overlay_0E555855_11E4_B66B_41A5_13BD4D03F8C2",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.91,
   "hfov": 5.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_35_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.31
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0CF6B322_11E7_BA29_41A0_9FB62C80566C",
   "pitch": 4.31,
   "yaw": -34.91,
   "hfov": 5.74,
   "distance": 100
  }
 ],
 "id": "overlay_0E553855_11E4_B66B_4195_7743E73AB6CD",
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.67,
   "hfov": 24.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_36_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 94,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.56
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_36_0.png",
      "class": "ImageResourceLevel",
      "width": 336,
      "height": 57
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.56,
   "yaw": -21.67,
   "hfov": 24.21,
   "distance": 50
  }
 ],
 "id": "overlay_0E55F855_11E4_B66B_41A5_5DA441414ACD",
 "data": {
  "label": "DEPARTAMENTO 1201"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.89,
   "hfov": 23.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_37_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 109,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.79
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_37_0.png",
      "class": "ImageResourceLevel",
      "width": 322,
      "height": 47
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.79,
   "yaw": -21.89,
   "hfov": 23.25,
   "distance": 50
  }
 ],
 "id": "overlay_0E55D855_11E4_B66B_4199_C582EC17585D",
 "data": {
  "label": "DEPARTAMENTO 607"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.79,
   "hfov": 12.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_38_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 55,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.7
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7, this.camera_0AE7BDC1_1BD4_C6DC_418D_E8374CCE2FA7); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_38_0.png",
      "class": "ImageResourceLevel",
      "width": 172,
      "height": 50
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.7,
   "yaw": -43.79,
   "hfov": 12.34,
   "distance": 50
  }
 ],
 "id": "overlay_0E55B856_11E4_B669_41A5_44FDAFC7304E",
 "data": {
  "label": "PLAZUELA"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.26,
   "hfov": 10.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.32
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E, this.camera_08C09037_1BD4_DDA5_41B2_F71B6560C5CC); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "SALA COMEDOR\u000a\u000a"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E82BCF21_F018_F1FD_41D1_7C1F0DBDE2E8",
   "pitch": 2.32,
   "yaw": 43.26,
   "hfov": 10.79,
   "distance": 100
  }
 ],
 "id": "overlay_62D24D5A_6D0F_8ED4_41D2_8EA790297809",
 "data": {
  "label": "SALA COMEDOR"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.21,
   "hfov": 13.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.95
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44, this.camera_08CEA047_1BD4_DDE5_41B6_542103B04268); this.mainPlayList.set('selectedIndex', 7)",
   "toolTip": "BA\u00d1O PRINCIPAL "
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_31748E10_1364_8DE9_41B0_569168F8DB44",
   "pitch": -1.95,
   "yaw": 171.21,
   "hfov": 13.06,
   "distance": 100
  }
 ],
 "id": "overlay_0F47D013_1364_75EE_418D_CD517DB9A253",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 66.26,
   "hfov": 10.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.73
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "\u000a"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_31617E19_1364_8A1B_4192_4548C7C59051",
   "pitch": 2.73,
   "yaw": 66.26,
   "hfov": 10.79,
   "distance": 100
  }
 ],
 "id": "overlay_F2E8C2C3_EB31_3501_41D5_8375A4D3D2CA",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.92,
   "hfov": 10.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.08
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A, this.camera_14B49124_1BD4_DF5B_41A4_A899277855ED); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_31619E19_1364_8A1B_41A7_BBF6F8B205AC",
   "pitch": -9.08,
   "yaw": 65.92,
   "hfov": 10.66,
   "distance": 100
  }
 ],
 "id": "overlay_F1090237_EB33_5502_41EA_729358860A63",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.78,
   "hfov": 10.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.58
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2, this.camera_14B87133_1BD4_DFBD_41B3_9499FFA1FC6C); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3161EE1A_1364_8A19_41A3_D51E25CB3FCA",
   "pitch": -20.58,
   "yaw": 65.78,
   "hfov": 10.11,
   "distance": 100
  }
 ],
 "id": "overlay_F108E775_EB37_FB06_41E9_289F4ADD97AC",
 "data": {
  "label": "Circle Arrow 03"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.97,
   "hfov": 25.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 68,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.61
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 355,
      "height": 83
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.61,
   "yaw": 84.97,
   "hfov": 25.16,
   "distance": 50
  }
 ],
 "id": "overlay_F429BA47_EAF2_F502_41C8_EC3AE8D9B669",
 "data": {
  "label": "DEPARTAMENTO 607"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.94,
   "hfov": 9.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.08
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2, this.camera_14BE6143_1BD4_DFDD_41B5_B81E9495D693); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 136,
      "height": 58
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.08,
   "yaw": 76.94,
   "hfov": 9.19,
   "distance": 50
  }
 ],
 "id": "overlay_F490E7EC_EAF3_5B06_41EB_E107F9BDAC3B",
 "data": {
  "label": "LOBBY"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.46,
   "hfov": 27.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 112,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.88
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 381,
      "height": 54
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.88,
   "yaw": 86.46,
   "hfov": 27.43,
   "distance": 50
  }
 ],
 "id": "overlay_F4794F52_EAF1_2B02_41B8_B98F09505770",
 "data": {
  "label": "DEPARTAMENTO 1201"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.78,
   "hfov": 10.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.89
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "toolTip": "PLAZUELA"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_35ED230F_1325_9BF7_41A2_133EE339798A",
   "pitch": -0.89,
   "yaw": 14.78,
   "hfov": 10.8,
   "distance": 100
  }
 ],
 "id": "overlay_0DE206EF_111F_BA36_4190_34919000FC2A",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.31,
   "hfov": 19.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_7_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 77,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.13
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 276,
      "height": 57
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.13,
   "yaw": 31.31,
   "hfov": 19.87,
   "distance": 50
  }
 ],
 "id": "overlay_0F4A524B_1364_FA7F_41B0_C5C5E2D88BC5",
 "data": {
  "label": "PLAZUELA"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.9,
   "hfov": 20.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 61,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.67
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7, this.camera_08EC5067_1BD4_DDA5_41AF_CE222BF3F833); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_31650E1C_1364_8A19_418C_70E6510F5478",
   "pitch": -14.67,
   "yaw": 5.9,
   "hfov": 20.9,
   "distance": 100
  }
 ],
 "id": "overlay_31F7269A_137D_BA19_4177_E29054D4617C",
 "data": {
  "label": "Circle Arrow 01c"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.34,
   "hfov": 7.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.05
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3165AE1D_1364_8A1B_41A1_A5D3ACADD40B",
   "pitch": 4.05,
   "yaw": 36.34,
   "hfov": 7.18,
   "distance": 100
  }
 ],
 "id": "overlay_31F7369A_137D_BA19_41B1_8ECDEF22CEDE",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.53,
   "hfov": 7.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.75
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3165DE1D_1364_8A1B_41A7_E79B9CDEB4AE",
   "pitch": -3.75,
   "yaw": 36.53,
   "hfov": 7.18,
   "distance": 100
  }
 ],
 "id": "overlay_31F7069A_137D_BA19_4199_6AFE0CBF4B5B",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.43,
   "hfov": 7.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.28
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_31641E1D_1364_8A1B_41B0_80F95437D417",
   "pitch": -11.28,
   "yaw": 36.43,
   "hfov": 7.06,
   "distance": 100
  }
 ],
 "id": "overlay_31F7669A_137D_BA19_4190_E62852C0FB84",
 "data": {
  "label": "Circle Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.78,
   "hfov": 10.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.2
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3164AE1E_1364_8A19_41A5_6803F21ECC2F",
   "pitch": 1.2,
   "yaw": -32.78,
   "hfov": 10.8,
   "distance": 100
  }
 ],
 "id": "overlay_31F7769A_137D_BA19_41AA_F9FFF6986BB7",
 "data": {
  "label": "Circle Arrow 04"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.32,
   "hfov": 16.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 75,
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.79
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 232,
      "height": 49
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.79,
   "yaw": 48.32,
   "hfov": 16.35,
   "distance": 50
  }
 ],
 "id": "overlay_31F7569A_137D_BA19_419D_592413305EAC",
 "data": {
  "label": "LOBBY"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.03,
   "hfov": 25.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 96,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.98
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 355,
      "height": 59
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.98,
   "yaw": 53.03,
   "hfov": 25.51,
   "distance": 50
  }
 ],
 "id": "overlay_31F4B69A_137D_BA19_4158_049ED4BBC114",
 "data": {
  "label": "DEPARTAMENTO 607"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 54.29,
   "hfov": 29.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0_HS_7_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 113,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.33
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 406,
      "height": 57
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.33,
   "yaw": 54.29,
   "hfov": 29.18,
   "distance": 50
  }
 ],
 "id": "overlay_31F4E69A_137D_BA19_419D_44404C3EAE6C",
 "data": {
  "label": "DEPARTAMENTO 1201"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.95,
   "hfov": 21.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_8_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 99,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.09
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 297,
      "height": 48
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.09,
   "yaw": -16.95,
   "hfov": 21.41,
   "distance": 50
  }
 ],
 "id": "overlay_31F4F69B_137D_BA1F_41A2_EB4051CC023A",
 "data": {
  "label": "COWORKING"
 }
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "right": 10,
 "width": "14.22%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
 "left": 10,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_rollover.png",
 "propagateClick": false,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_pressed.png",
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.44,
   "hfov": 16.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0_HS_5_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.21
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834, this.camera_088DE086_1BD4_DD67_4197_693E34EF8BCF); this.mainPlayList.set('selectedIndex', 9)",
   "toolTip": "LAVANDERIA"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7A38664E_6C74_4D4C_41CB_D59E47BBBC20",
 "data": {
  "label": "LAVANDERIA"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.98,
   "hfov": 8.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.73
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E, this.camera_14ABC107_1BD4_DF65_41B7_8F9ACAC48EAF); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "COMEDOR"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_754FE34A_6C15_C4B5_41BA_DFE1FBF20954",
   "pitch": -9.73,
   "yaw": -161.98,
   "hfov": 8.79,
   "distance": 100
  }
 ],
 "id": "overlay_74A81DD8_6C1C_5F54_41D3_24FE58A2E92E",
 "data": {
  "label": " COMEDOR"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.96,
   "hfov": 8.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.63
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6, this.camera_14AE3116_1BD4_DF67_4185_7942EA718C60); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "SALA"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_754E034B_6C15_CB4B_41D3_A0AE2D4889BD",
   "pitch": -2.63,
   "yaw": -170.96,
   "hfov": 8.9,
   "distance": 100
  }
 ],
 "id": "overlay_74A9239E_6C14_CBCC_41D9_A48D01593DE6",
 "data": {
  "label": "SALA"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 39.5,
   "hfov": 8.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.22
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834, this.camera_14A430F7_1BD4_DEA5_416E_7FD198F38778); this.mainPlayList.set('selectedIndex', 9)",
   "toolTip": "LAVANDERIA\u000a"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC562641_BE29_B963_41C5_C361D7FF2443",
   "pitch": -6.22,
   "yaw": 39.5,
   "hfov": 8.86,
   "distance": 100
  }
 ],
 "id": "overlay_AFEB06B1_BE29_5923_41DE_5244D7CCB860",
 "data": {
  "label": "LAVANDERIA"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 56.31,
   "hfov": 8.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.48
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA, this.camera_0AAA2E38_1BD4_C5AD_41B5_C145A519BF12); this.mainPlayList.set('selectedIndex', 5)",
   "toolTip": "DORMITORIO NI\u00d1A"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E82C0F1B_F018_F1CD_41E1_2C1A2284AA0B",
   "pitch": -0.48,
   "yaw": 56.31,
   "hfov": 8.64,
   "distance": 100
  }
 ],
 "id": "overlay_605CE276_6D0A_9ADF_41B5_1C25210B90E0",
 "data": {
  "label": "DORMITORIO NI\u00d1A"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.51,
   "hfov": 7.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.11
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "toolTip": "DORMITORIO NI\u00d1O\u000a"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D4C3C8F4_CC0A_E98A_41D9_CB90F45DC0A8",
   "pitch": -1.11,
   "yaw": 25.51,
   "hfov": 7.2,
   "distance": 100
  }
 ],
 "id": "overlay_605F1276_6D0A_9ADF_41C1_8A6F5419B52D",
 "data": {
  "label": "DORMITORIO NI\u00d1O"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.23,
   "hfov": 7.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.92
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "DORMITORIO PRINCIPAL\u000a"
  }
 ],
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D4C3E8F4_CC0A_E98A_41BE_B3B1C1E8439C",
   "pitch": -0.92,
   "yaw": 19.23,
   "hfov": 7.2,
   "distance": 100
  }
 ],
 "id": "overlay_605F0276_6D0A_9ADF_41BF_8EE9C85DDAAB",
 "data": {
  "label": "DORMITORIO PRINCIPAL"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.71,
   "hfov": 6.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.82
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E, this.camera_0A9DFE1F_1BD4_C564_41BB_AF38814AFD05); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "COMEDOR\u000a"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D4C308F4_CC0A_E98A_41B8_4799F16A4B39",
   "pitch": -15.82,
   "yaw": -0.71,
   "hfov": 6.93,
   "distance": 100
  }
 ],
 "id": "overlay_605F3276_6D0A_9ADF_41D0_D8371D8168AD",
 "data": {
  "label": "COMEDOR"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.62,
   "hfov": 7.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.28
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933, this.camera_0ABAAE52_1BD4_C5FC_41A8_F32A30980ECE); this.mainPlayList.set('selectedIndex', 3)",
   "toolTip": "COCINA\u000a"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0FCC022D_11E4_9A3B_41A5_71D62A16E4C7",
   "pitch": -0.28,
   "yaw": 7.62,
   "hfov": 7.2,
   "distance": 100
  }
 ],
 "id": "overlay_605F2276_6D0A_9ADF_41D2_63212E0558FE",
 "data": {
  "label": "COCINA"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6,
   "hfov": 8.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_19_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 43,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.94
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_19_0.png",
      "class": "ImageResourceLevel",
      "width": 119,
      "height": 44
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.94,
   "yaw": -6,
   "hfov": 8.58,
   "distance": 50
  }
 ],
 "id": "overlay_0D364E2B_11EB_8A3F_41AA_2722DBF01AD2",
 "data": {
  "label": "LOBBY"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.26,
   "hfov": 20.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_20_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 104,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.23
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A, this.camera_0A49DE6B_1BD4_C5AC_41A7_65ACAA356E9B); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_20_0.png",
      "class": "ImageResourceLevel",
      "width": 280,
      "height": 43
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.23,
   "yaw": -0.26,
   "hfov": 20.11,
   "distance": 50
  }
 ],
 "id": "overlay_0A2E190C_11E5_F7F9_41A8_EAECB2460143",
 "data": {
  "label": "DEPARTAMENTO 607"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.37,
   "hfov": 7.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_21_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.78
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0DA010BB_111D_B61E_41A7_314C068DF080",
   "pitch": -2.78,
   "yaw": -13.37,
   "hfov": 7.19,
   "distance": 100
  }
 ],
 "id": "overlay_0C8E84E6_11EC_BE29_419B_BA3D4B9F33E2",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.45,
   "hfov": 7.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_22_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.85
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0DA070BC_111D_B61A_41A6_5AF8446BD6CE",
   "pitch": 4.85,
   "yaw": -13.45,
   "hfov": 7.17,
   "distance": 100
  }
 ],
 "id": "overlay_0DFA2807_11EF_B5F7_41AC_F0FE9A06FBE5",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.99,
   "hfov": 13.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.21
  }
 ],
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_14E38F22_1BAD_C35F_4187_65C07954055A, this.camera_08FD4076_1BD4_DDA7_41A1_5C688CFEB298); this.mainPlayList.set('selectedIndex', 10)",
   "toolTip": "SALA"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E8D1BF26_F018_F1C7_41E3_D6E664C64D8C",
   "pitch": -22.21,
   "yaw": -159.99,
   "hfov": 13.33,
   "distance": 100
  }
 ],
 "id": "overlay_FE9B449F_EAF1_DD02_41E6_53D32922EA74",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "left": 0,
 "width": 330,
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6ECE8198_4F7D_CE0F_41B6_C7C8D7E8FF58",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_6ECE7198_4F7D_CE0F_41B4_ED3C974BE2A1",
  "this.Container_6ECE5198_4F7D_CE0F_416D_84774E7F2542"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6EC9F199_4F7D_CE01_41C8_1A8AEA0A382B",
 "left": "15%",
 "children": [
  "this.IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C"
 ],
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "overflow": "visible",
 "paddingLeft": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
  "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "children": [
  "this.WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F",
 "left": "15%",
 "children": [
  "this.IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848"
 ],
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "overflow": "visible",
 "paddingLeft": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6FD227C1_4F7F_B27E_41A4_4340D943D7A5",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "children": [
  "this.MapViewer",
  "this.Container_6FD207C1_4F7F_B27E_41CC_18278046BDCA"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_17522AC5_57D1_805F_41CA_96B265C364E4",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "children": [
  "this.Container_17521AC5_57D1_805F_41CD_E04DDA9C90DD",
  "this.Container_1752FAC5_57D1_805F_4193_13B2577B9D8A"
 ],
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "shadowVerticalLength": 0
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_17516AC5_57D1_805F_41CA_8E754787B1A2",
 "left": "15%",
 "children": [
  "this.IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0"
 ],
 "backgroundOpacity": 0,
 "right": "15%",
 "scrollBarMargin": 2,
 "overflow": "visible",
 "paddingLeft": 0,
 "paddingRight": 20,
 "minHeight": 1,
 "propagateClick": false,
 "top": "10%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "bottom": "80%",
 "scrollBarWidth": 10,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "shadow": false
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B48BA9D8_BFEB_EB61_41D0_0BB29A0ECD44_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8D4CF21_F018_F1FD_41E5_8DCC81B00E78",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7EA55A29_6C3C_44F4_41C9_E3DE49E858AA_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E82B7F21_F018_F1FD_4189_5DD4BE2C25BE",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0A8C78D4_1BB3_CEE4_41A0_9612AA57B534",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0A8C18D4_1BB3_CEE4_418C_82279F526AFB",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0A8CB8D4_1BB3_CEE4_419F_243E94F6B4D8",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0A8D68D5_1BB3_CEE4_41B1_DEE6D9DC2895",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0A8D28D5_1BB3_CEE4_41AA_5D77B0CAC28B",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0A8DA8D6_1BB3_CEE4_4179_E6E3291D3F44",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_14E38F22_1BAD_C35F_4187_65C07954055A_1_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0A8E58D6_1BB3_CEE4_417B_9E3BD4188316",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B48E324A_BFEB_D961_41D7_9AA3C5404B10_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8D47F22_F018_F1FF_41C0_46229710071B",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BF2C9A17_EED2_F502_41B0_209AA8501663_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_ED08B5CB_F1E1_587F_41D2_00219634E19E",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E7E768A1_F01F_F0FD_41BA_C818D5CD1D12",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E7E7F8A1_F01F_F0FD_41E8_553794C50712",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C539447A_C81D_B3A9_41E4_35662EC989DF_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E7E028A2_F01F_F0FF_41DB_FACE76218688",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8D0FF26_F018_F1C7_41D1_8E954DFAB433",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B48B1423_BFEB_B927_41E5_5AFFBE6DE965_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8D02F26_F018_F1C7_41DB_F52AAF6C6B1B",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B49712F0_BFEB_F921_41D6_9CA2026FA198_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8D11F27_F018_F1C5_41DA_47A0591F4DDB",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7EA7A448_6C3C_4CB4_41D4_2D5244B7B834_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D4C098F9_CC0A_E97A_41E4_F94762A6D4AA",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B4818B38_BFEB_AF21_4199_21489A41FCCA_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D4C228F9_CC0A_E97A_41D3_9D5ABB7D4CC0",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_F27D8DE9_EAD3_2F01_41BE_8C6568382C3E",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_DCAB0049_CD50_2E63_41DB_B993CDA40F3C_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8D1AF25_F018_F1C5_41E9_067A7609F8D1",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 480
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_316BEE1F_1364_8A17_41AE_75E61AA5FAA9",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_316A6E1F_1364_8A17_41AE_F1487934A9F7",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_316A8E1F_1364_8A17_416E_808338A8191A",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_31691E20_1364_8A29_41A1_D57BBD64F793",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_31697E20_1364_8A29_41A1_9848A15A08F0",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E742D34_137C_8E2A_41AF_BECC85A87EF7_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3169FE20_1364_8A29_41A8_17D06BC1AF58",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7EAFC289_6C3C_45B4_41C0_5FE237417E3D_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8D49F21_F018_F1FD_41E1_B294F0B5D9CA",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E82FCF1D_F018_F1C5_41C2_4819AC47B9A4",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D4C2A8F5_CC0A_E98A_41D3_078499B4B8E6",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D4C2D8F6_CC0A_E976_41D9_0789C2B4925C",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_9_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D4C2F8F6_CC0A_E976_41CB_98D1C68325D3",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_10_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D4C218F6_CC0A_E976_41E3_259B8688BEB2",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_11_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D4C248F6_CC0A_E976_41E8_80D520D401E6",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_14_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D4C198F7_CC0A_E976_41E3_9E7936786173",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_21_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0DA110C0_111D_B66A_41AA_B2952DDB1E4E",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_61B0027C_6D0A_FAD3_41BB_51D27DFBA99E_0_HS_22_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0DA150C1_111D_B66A_41AC_BA71D3A19661",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B4BADC41_BFEB_A963_41D8_6E5A27206CAA_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8D76F25_F018_F1C5_41DD_433F23FF75DE",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_25_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CF2731D_11E7_BA1B_41AA_042789824B75",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_26_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CF5831D_11E7_BA1B_41AE_802C4A869B02",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_27_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CF5331E_11E7_BA19_41A2_2D28ACA93344",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_28_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CF4B31F_11E7_BA17_4160_C21BF629C624",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_29_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CF4E31F_11E7_BA17_4195_D06B7EE132A5",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_30_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CF4231F_11E7_BA17_4190_4F55100188DB",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_31_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CF47320_11E7_BA29_41A6_6CE5F55C30BD",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_34_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CF73321_11E7_BA2B_41A0_534EB6576F6D",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0E539853_11E4_B66F_41AC_1699DC5FC6B2_1_HS_35_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0CF6B322_11E7_BA29_41A0_9FB62C80566C",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E82BCF21_F018_F1FD_41D1_7C1F0DBDE2E8",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_62D2AD5A_6D0F_8ED4_41C6_14FDBCC6873E_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_31748E10_1364_8DE9_41B0_569168F8DB44",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_31617E19_1364_8A1B_4192_4548C7C59051",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_31619E19_1364_8A1B_41A7_BBF6F8B205AC",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3161EE1A_1364_8A19_41A3_D51E25CB3FCA",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C6F7EA82_C81D_F759_41C7_4C07C672D6DF_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_35ED230F_1325_9BF7_41A2_133EE339798A",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1220,
   "height": 480
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_31650E1C_1364_8A19_418C_70E6510F5478",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3165AE1D_1364_8A1B_41A1_A5D3ACADD40B",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3165DE1D_1364_8A1B_41A7_E79B9CDEB4AE",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_31641E1D_1364_8A1B_41B0_80F95437D417",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_31F7D699_137D_BA1B_4194_3C8AB767D613_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3164AE1E_1364_8A19_41A5_6803F21ECC2F",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_754FE34A_6C15_C4B5_41BA_DFE1FBF20954",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_754E034B_6C15_CB4B_41D3_A0AE2D4889BD",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7EB69FD7_6C3C_3B5C_41D8_7E346184B933_0_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_AC562641_BE29_B963_41C5_C361D7FF2443",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E82C0F1B_F018_F1CD_41E1_2C1A2284AA0B",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D4C3C8F4_CC0A_E98A_41D9_CB90F45DC0A8",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D4C3E8F4_CC0A_E98A_41BE_B3B1C1E8439C",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D4C308F4_CC0A_E98A_41B8_4799F16A4B39",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_9_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0FCC022D_11E4_9A3B_41A5_71D62A16E4C7",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_21_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0DA010BB_111D_B61E_41A7_314C068DF080",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_605CF266_6D0A_9AFC_41C9_1F0CFF7381B6_0_HS_22_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_0DA070BC_111D_B61A_41A6_5AF8446BD6CE",
 "frameCount": 24
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_D8510CD8_CC3A_69BA_41D0_817AFD38FBE7_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E8D1BF26_F018_F1C7_41E3_D6E664C64D8C",
 "frameCount": 24
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 30,
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#0089C8"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container blue"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "class": "IconButton",
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 4,
 "maxHeight": 80,
 "maxWidth": 80,
 "backgroundOpacity": 0,
 "width": 50,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "width": 259,
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 40,
 "paddingLeft": 40,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#0089C8"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 40,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "data": {
  "name": "- Buttons set"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "class": "IconButton",
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "backgroundOpacity": 0,
 "maxHeight": 40,
 "maxWidth": 40,
 "right": 50,
 "width": 40,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "propagateClick": true,
 "top": "46.03%",
 "verticalAlign": "middle",
 "bottom": "49.6%",
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "maxWidth": 60,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareTwitter(window.location.href)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "class": "IconButton",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "width": 58,
 "maxWidth": 58,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.shareFacebook(window.location.href)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6ECE7198_4F7D_CE0F_41B4_ED3C974BE2A1",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2"
 ],
 "overflow": "scroll",
 "width": "85%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "class": "Container",
 "id": "Container_6ECE5198_4F7D_CE0F_416D_84774E7F2542",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_6ECE4198_4F7D_CE0F_41A0_688A405FA9A1",
  "this.Container_6ECE3198_4F7D_CE0F_41B9_971123164DFE",
  "this.Container_6ECE0198_4F7D_CE0F_41C2_173DE9AC91EC"
 ],
 "overflow": "visible",
 "width": "50%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 50,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "class": "IconButton",
 "id": "IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C",
 "backgroundOpacity": 0,
 "maxWidth": 50,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
 "backgroundOpacity": 0.3,
 "children": [
  "this.IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9",
 "left": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "backgroundOpacity": 0,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemVerticalAlign": "top",
 "paddingLeft": 70,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "itemOpacity": 1,
 "height": "92%",
 "playList": "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "borderSize": 0,
 "itemPaddingRight": 3,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "class": "ThumbnailGrid",
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadow": true,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingRight": 70,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": false,
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadow": true,
 "itemHorizontalAlign": "center",
 "gap": 26,
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxWidth": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "itemWidth": 220,
 "itemMode": "normal",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald"
},
{
 "class": "WebFrame",
 "id": "WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70",
 "backgroundOpacity": 1,
 "width": "100%",
 "borderRadius": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "url": "https://maps.google.com/maps?output=embed&center=-12.0710418,-77.0523873&z=20&q=Juan+Pablo+Fernandini+1275,+Pueblo+Libre+15084",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "borderSize": 0,
 "scrollEnabled": true,
 "data": {
  "name": "WebFrame"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 50,
 "class": "IconButton",
 "id": "IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848",
 "backgroundOpacity": 0,
 "maxWidth": 50,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
  "this.IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
  "this.IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
  "this.IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F"
 ],
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "shadow": false
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "progressBarOpacity": 1,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6FD207C1_4F7F_B27E_41CC_18278046BDCA",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "header"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_17521AC5_57D1_805F_41CD_E04DDA9C90DD",
 "backgroundOpacity": 1,
 "children": [
  "this.Image_17520AC5_57D1_805F_41CD_E7281C08A967"
 ],
 "overflow": "scroll",
 "width": "55%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-left"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "class": "Container",
 "id": "Container_1752FAC5_57D1_805F_4193_13B2577B9D8A",
 "backgroundOpacity": 1,
 "children": [
  "this.Container_1752EAC5_57D1_805F_41D2_28E2DB3AFCF5",
  "this.Container_1752DAC5_57D1_805F_41D3_AAEEE721B441",
  "this.Container_17517AC5_57D1_805F_41B5_79DEF98B730F"
 ],
 "overflow": "visible",
 "width": "45%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 60,
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 20,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#0069A3",
 "data": {
  "name": "-right"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "class": "IconButton",
 "id": "IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0",
 "backgroundOpacity": 0,
 "maxWidth": 60,
 "width": "25%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0_rollover.jpg",
 "propagateClick": false,
 "height": "75%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_17514AC5_57D1_805F_41D3_DC92D3D712A0.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "maxHeight": 1095,
 "class": "Image",
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "maxWidth": 1095,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "height": "25%",
 "verticalAlign": "top",
 "minWidth": 40,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.3,
 "class": "Container",
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "backgroundOpacity": 0,
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
 "right": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "26%",
 "bottom": "26%",
 "scrollBarWidth": 6,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 1"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "right": "0%",
 "width": "76.818%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 130,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "gap": 5,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "class": "Image",
 "id": "Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2",
 "left": "0%",
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6ECE4198_4F7D_CE0F_41A0_688A405FA9A1",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "class": "Container",
 "id": "Container_6ECE3198_4F7D_CE0F_41B9_971123164DFE",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_6ECE2198_4F7D_CE0F_41C1_6D512C0D0B76",
  "this.Button_6ECE1198_4F7D_CE0F_41D1_D607B97BA20A"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_6ECE0198_4F7D_CE0F_41C2_173DE9AC91EC",
 "backgroundOpacity": 0.3,
 "width": 370,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "maxHeight": 50,
 "class": "IconButton",
 "id": "IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633",
 "backgroundOpacity": 0,
 "maxWidth": 50,
 "right": 20,
 "width": "100%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "progressBarOpacity": 1,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "right",
 "maxHeight": 50,
 "class": "IconButton",
 "id": "IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F",
 "backgroundOpacity": 0,
 "maxWidth": 50,
 "right": 20,
 "width": "10%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "10%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "right",
 "maxHeight": 50,
 "class": "IconButton",
 "id": "IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54",
 "backgroundOpacity": 0,
 "maxWidth": 50,
 "right": 20,
 "width": "100%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_rollover.jpg",
 "propagateClick": false,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_pressed.jpg",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54.jpg",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "class": "Image",
 "id": "Image_17520AC5_57D1_805F_41CD_E7281C08A967",
 "left": "0%",
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_17520AC5_57D1_805F_41CD_E7281C08A967.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "borderSize": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "shadow": false
},
{
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_1752EAC5_57D1_805F_41D2_28E2DB3AFCF5",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "5%",
 "paddingTop": 20,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "class": "Container",
 "id": "Container_1752DAC5_57D1_805F_41D3_AAEEE721B441",
 "backgroundOpacity": 0.3,
 "children": [
  "this.HTMLText_1752BAC5_57D1_805F_41C3_4D3FE0C946A5",
  "this.Container_1752AAC5_57D1_805F_41C3_F3A70F1424E8"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 30,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C",
 "data": {
  "name": "Container text"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_17517AC5_57D1_805F_41B5_79DEF98B730F",
 "backgroundOpacity": 0.3,
 "width": 370,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "backgroundOpacity": 0.2,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false); this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_0B2A9D7A_1BD4_C7AC_41B8_605BEB20693E, -1.516245487364621, -12.45);; this.mainPlayList.set('selectedIndex', 0)",
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "VISTA EXTERIOR >",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0.2,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 1 - Reception"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5B1F16A9_4F08_3101_41C0_148FE9D83410",
 "backgroundOpacity": 0.2,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 17)",
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "LOBBY >",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 0.2,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 2 - Rooms"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "backgroundOpacity": 0.2,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "if(!this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3.get('visible')){ this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false)",
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "\u00c1REAS COMUNES >",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 0.2,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 3 - Amenities"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "class": "Container",
 "id": "Container_5C522B60_4F38_573F_41CA_3223B2D946A3",
 "backgroundOpacity": 0.3,
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
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "height": 200,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 3-1"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "backgroundOpacity": 0.2,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "if(!this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F.get('visible')){ this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false)",
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "DEPARTAMENTO 1201 >",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0.2,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 4 - Sports area"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "class": "Container",
 "id": "Container_5C937563_4F38_7301_41CE_2342D0CB6B4F",
 "backgroundOpacity": 0.3,
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
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "height": 200,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 4-1"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "backgroundOpacity": 0.2,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "if(!this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F.get('visible')){ this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false)",
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "DEPARTAMENTO 607 >",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0.2,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 5 - Swimming"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "class": "Container",
 "id": "Container_5CCC0E8D_4F38_7101_41A7_17785177980F",
 "backgroundOpacity": 0.3,
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
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "height": 200,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 5-1"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "backgroundOpacity": 0.2,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "if(!this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062.get('visible')){ this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062, false, 0, null, null, false) }; this.setComponentVisibility(this.Container_5C522B60_4F38_573F_41CA_3223B2D946A3, false, 0, null, null, false); this.setComponentVisibility(this.Container_5C937563_4F38_7301_41CE_2342D0CB6B4F, false, 0, null, null, false); this.setComponentVisibility(this.Container_5CCC0E8D_4F38_7101_41A7_17785177980F, false, 0, null, null, false)",
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 10,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "RESTAURANTS >",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 0.2,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 6 - Restaurants"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "class": "Container",
 "id": "Container_5B0E71E8_4F38_530F_41C9_EA3BEA1CD062",
 "backgroundOpacity": 0.3,
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
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "height": 200,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 6-1"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "backgroundOpacity": 1,
 "width": 40,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "height": 2,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "height": 78,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "height": 56,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 7,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 1"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "height": 44,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 7,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 2"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "id": "HTMLText_6ECE2198_4F7D_CE0F_41C1_6D512C0D0B76",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 20,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin. </SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.3vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "center",
 "class": "Button",
 "id": "Button_6ECE1198_4F7D_CE0F_41D1_D607B97BA20A",
 "backgroundOpacity": 0.7,
 "width": 180,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "borderRadius": 50,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "2.39vh",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "LOREM IPSUM",
 "fontStyle": "italic",
 "borderSize": 0,
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "scrollBarOpacity": 0,
 "class": "HTMLText",
 "id": "HTMLText_1752BAC5_57D1_805F_41C3_4D3FE0C946A5",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "46%",
 "minWidth": 1,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.42vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.92vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_1752AAC5_57D1_805F_41C3_F3A70F1424E8",
 "backgroundOpacity": 0.3,
 "children": [
  "this.Image_17529AC5_57D1_805F_41BD_C64BF1F259C6",
  "this.HTMLText_17528AC5_57D1_805F_41CC_502F9EE91657"
 ],
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": "75%",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "data": {
  "name": "- content"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_5C7DCB10_4F38_571F_41B6_A2C80BEB0DB6",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_5C7DEB11_4F38_5701_41D1_BD9BEF92F61B",
 "backgroundOpacity": 0,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5C467B11_4F38_5701_41BD_6ADABBF10640",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "GIMNASIO",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5C461B12_4F38_5703_41A5_2B58A57259CB",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 18)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "COWORKING",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "pressedLabel": "ZONA DE NIÑOS",
 "id": "Button_5C463B13_4F38_5701_41D3_7F808639BD58",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "ZONA DE NI\u00d1OS",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5C47EB13_4F38_5701_41D0_849C58570FD5",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 19)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "SUM",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5C478B14_4F38_5707_41B7_E567FC5BFF03",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 21)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "PLAZUELA",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5C47BB14_4F38_5707_41C5_004237DF4BC7",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "ZONA DE PARRILLAS",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5C475B14_4F38_5707_41B5_45CB509F3FEC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "TERRAZA",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5C470B15_4F38_5701_41C8_8315EAA43F47",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_5CB12513_4F38_7300_41C1_CF46A5DB681C",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_5CBEF513_4F38_7300_41CD_FE4054DD71DB",
 "backgroundOpacity": 0,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CBE8514_4F38_7300_41C7_4C2B003C16FE",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "SALA",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CBEA514_4F38_7300_41C4_E7D746E7D487",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 3)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "COCINA",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "pressedLabel": "LAVANDERIA",
 "id": "Button_5CBE4515_4F38_7300_41D1_1CA43C43E7F8",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 9)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "LAVANDERIA",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CBE1515_4F38_7300_41B8_0BE61EE2A2AC",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 4)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "DORMITORIO PRINCIPAL",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CBE2516_4F38_7300_41B3_266EC752AC75",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "DORMITORIO NI\u00d1O",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CBFF516_4F38_7300_41C0_01CB82BCD11E",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 5)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "DORMITORIO NI\u00d1A",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CBF9517_4F38_7300_41BB_8710868B4E0A",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 7)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "BA\u00d1O PRINCIPAL",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CBFA517_4F38_7300_41CC_D4157FF5A756",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 8)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "BA\u00d1O SECUNDARIO",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_5CE0FDFC_4F38_7300_41BA_B59158C97EA7",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_5CE09DFC_4F38_7300_41C5_496587AD3AF4",
 "backgroundOpacity": 0,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CE04DFD_4F38_7300_41CF_9AA175DB4918",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 10)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "SALA",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CE02DFD_4F38_7300_41AC_5CCE35E28CCE",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "COCINA",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_5CE1FDFE_4F38_7300_41CB_C0EFC8517F56",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 9)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "LAVANDERIA",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CE1BDFE_4F38_7300_41AF_930026BA5A6C",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 13)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "DORMITORIO",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CE17DFF_4F38_7300_41C6_8F855B436216",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 12)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "ESTUDIO",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CE13DFF_4F38_7300_4168_8B08D53E7557",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 15)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "BA\u00d1O PRINCIPAL",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CEEFE00_4F38_7100_41C4_47D712DA1F96",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 16)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "BA\u00d1O SECUNDARIO",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CEEAE00_4F38_7100_41CA_772C2B0C9596",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_5CDED17E_4F38_5303_41CD_E7D6CF4384E1",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "height": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "class": "Container",
 "id": "Container_5CDE817F_4F38_5301_41CB_1573369D710F",
 "backgroundOpacity": 0,
 "width": "100%",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CDE217F_4F38_5301_41C6_96F7478E4BCD",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverShadowBlurRadius": 18,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CDFE180_4F38_53FF_41BA_C2AE8CF20676",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_5CDFA180_4F38_53FF_41B1_A82E7A427261",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CDF7181_4F38_5301_41D0_9F8175F5BACF",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 4"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CDF2181_4F38_5301_419E_50D4A975C358",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 5"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CDCF182_4F38_5303_41BA_3B4FB28D5CC6",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CDCD187_4F38_5301_41D2_1D9369EA7682",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 7"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "class": "Button",
 "id": "Button_5CDC6188_4F38_530F_416D_D8C2C6CAD624",
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#000000"
 ],
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 36,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 0.3,
 "data": {
  "name": "Button text 8"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "backgroundOpacity": 0,
 "width": 44,
 "maxWidth": 101,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "data": {
  "name": "IconButton Info"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "backgroundOpacity": 0,
 "width": 44,
 "maxWidth": 101,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "data": {
  "name": "IconButton Thumblist"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "backgroundOpacity": 0,
 "width": 44,
 "maxWidth": 101,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "data": {
  "name": "IconButton Location"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "backgroundOpacity": 0,
 "width": 44,
 "maxWidth": 101,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "data": {
  "name": "IconButton Photoalbum"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "backgroundOpacity": 0,
 "width": 44,
 "maxWidth": 101,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "data": {
  "name": "IconButton Floorplan"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "backgroundOpacity": 0,
 "width": 44,
 "maxWidth": 101,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_17512AC5_57D1_805F_41A9_61CF65EE8EE8, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "data": {
  "name": "IconButton Realtor"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "backgroundOpacity": 0,
 "width": 44,
 "maxWidth": 101,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "data": {
  "name": "IconButton Video"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 101,
 "class": "IconButton",
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "backgroundOpacity": 0,
 "width": 50,
 "maxWidth": 101,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "data": {
  "name": "IconButton --"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "maxHeight": 200,
 "class": "Image",
 "id": "Image_17529AC5_57D1_805F_41BD_C64BF1F259C6",
 "backgroundOpacity": 0,
 "maxWidth": 200,
 "width": "25%",
 "borderRadius": 0,
 "url": "skin/Image_17529AC5_57D1_805F_41BD_C64BF1F259C6.jpg",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "class": "HTMLText",
 "id": "HTMLText_17528AC5_57D1_805F_41CC_502F9EE91657",
 "backgroundOpacity": 0,
 "width": "75%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.3vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.3vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "scripts": {
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "existsKey": function(key){  return key in window; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); }
 },
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
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
