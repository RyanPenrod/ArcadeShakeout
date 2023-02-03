(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("SomethingInTheDark_GameMap_JSFile",
{ "compressionlevel":-1,
 "editorsettings":
    {
     "export":
        {
         "format":"tmx"
        }
    },
 "height":20,
 "infinite":true,
 "layers":[
        {
         "chunks":[
                {
                 "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 47, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51,
                    0, 0, 54, 84, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85,
                    0, 0, 54, 96, 84, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85,
                    0, 0, 54, 96, 96, 84, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85,
                    0, 0, 54, 96, 96, 96, 57, 58, 57, 57, 57, 57, 57, 57, 57, 57,
                    0, 0, 54, 96, 96, 96, 58, 59, 57, 57, 57, 57, 57, 57, 57, 57,
                    0, 0, 54, 96, 96, 96, 57, 57, 57, 57, 57, 57, 58, 57, 57, 57,
                    0, 0, 54, 96, 96, 96, 57, 57, 57, 94, 95, 57, 57, 57, 68, 69,
                    0, 0, 54, 96, 96, 96, 58, 57, 59, 106, 107, 57, 57, 57, 80, 81,
                    0, 0, 54, 96, 96, 96, 57, 57, 57, 57, 57, 57, 58, 57, 57, 57,
                    0, 0, 54, 96, 96, 96, 57, 57, 58, 57, 57, 57, 57, 57, 57, 57,
                    0, 0, 54, 96, 96, 96, 57, 57, 57, 58, 57, 59, 57, 57, 57, 57],
                 "height":16,
                 "width":16,
                 "x":-16,
                 "y":-16
                }, 
                {
                 "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    51, 51, 51, 51, 51, 48, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51,
                    85, 85, 85, 85, 85, 54, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87,
                    85, 85, 85, 85, 85, 54, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87,
                    85, 85, 85, 85, 85, 54, 87, 87, 87, 87, 87, 87, 87, 87, 87, 87,
                    57, 57, 57, 57, 57, 54, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
                    57, 57, 57, 57, 57, 54, 57, 57, 59, 59, 57, 57, 57, 57, 57, 57,
                    57, 57, 58, 57, 57, 54, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
                    70, 71, 57, 57, 57, 54, 57, 57, 57, 60, 61, 62, 63, 57, 57, 57,
                    82, 83, 57, 57, 57, 54, 57, 57, 57, 72, 73, 74, 75, 57, 58, 57,
                    57, 57, 57, 58, 57, 54, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
                    57, 58, 57, 57, 57, 54, 57, 58, 57, 59, 57, 58, 58, 57, 57, 57,
                    57, 57, 57, 57, 57, 54, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57],
                 "height":16,
                 "width":16,
                 "x":0,
                 "y":-16
                }, 
                {
                 "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    51, 51, 51, 51, 51, 51, 51, 51, 49, 0, 0, 0, 0, 0, 0, 0,
                    87, 87, 87, 87, 87, 87, 87, 1610612835, 54, 0, 0, 0, 0, 0, 0, 0,
                    87, 87, 87, 87, 87, 87, 1610612835, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    87, 87, 87, 87, 87, 1610612835, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    57, 57, 57, 57, 57, 98, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    58, 59, 57, 58, 57, 98, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    57, 57, 57, 57, 57, 98, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    92, 93, 57, 57, 57, 98, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    104, 105, 57, 57, 57, 98, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    57, 57, 57, 57, 58, 98, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    57, 58, 57, 57, 57, 98, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    57, 57, 57, 57, 57, 98, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0],
                 "height":16,
                 "width":16,
                 "x":16,
                 "y":-16
                }, 
                {
                 "data":[0, 0, 54, 96, 96, 96, 57, 57, 57, 64, 65, 57, 57, 57, 43, 59,
                    0, 0, 54, 96, 96, 96, 57, 57, 57, 76, 77, 57, 57, 57, 54, 57,
                    0, 0, 54, 96, 96, 96, 57, 57, 57, 88, 89, 57, 57, 57, 54, 57,
                    0, 0, 54, 96, 96, 96, 57, 57, 58, 100, 101, 57, 57, 57, 54, 57,
                    0, 0, 54, 96, 96, 96, 57, 59, 58, 57, 57, 57, 59, 58, 56, 51,
                    0, 0, 54, 96, 96, 96, 57, 58, 57, 57, 59, 57, 57, 57, 54, 57,
                    0, 0, 54, 96, 96, 96, 57, 57, 57, 57, 58, 57, 57, 57, 54, 57,
                    0, 0, 55, 51, 51, 51, 51, 51, 51, 51, 49, 57, 57, 57, 54, 57,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 57, 57, 57, 45, 57,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 57, 58, 59, 59, 57,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 57, 57, 57, 57, 57,
                    0, 0, 47, 51, 51, 51, 51, 51, 51, 51, 53, 57, 57, 57, 57, 57,
                    0, 0, 54, 108, 108, 108, 57, 57, 57, 57, 57, 57, 57, 57, 43, 57,
                    0, 0, 54, 108, 108, 108, 59, 58, 57, 58, 57, 57, 57, 57, 54, 58,
                    0, 0, 54, 108, 108, 108, 57, 57, 57, 57, 57, 57, 58, 57, 54, 57,
                    0, 0, 54, 108, 108, 108, 57, 57, 57, 114, 115, 57, 57, 57, 54, 57],
                 "height":16,
                 "width":16,
                 "x":-16,
                 "y":0
                }, 
                {
                 "data":[58, 58, 46, 51, 51, 42, 51, 51, 44, 57, 57, 57, 43, 57, 57, 57,
                    57, 57, 57, 57, 59, 54, 57, 57, 57, 57, 58, 57, 54, 57, 57, 57,
                    57, 57, 57, 57, 57, 54, 57, 57, 57, 57, 57, 57, 54, 57, 57, 57,
                    58, 57, 59, 57, 57, 54, 57, 57, 57, 57, 57, 57, 54, 57, 57, 57,
                    51, 44, 57, 57, 58, 54, 57, 57, 57, 46, 51, 51, 50, 57, 57, 59,
                    57, 57, 57, 57, 57, 54, 57, 57, 57, 57, 57, 57, 54, 57, 57, 57,
                    58, 58, 57, 57, 57, 54, 57, 57, 57, 57, 57, 57, 54, 57, 57, 58,
                    57, 57, 57, 57, 57, 54, 57, 57, 57, 57, 57, 57, 54, 57, 57, 57,
                    57, 57, 47, 51, 51, 52, 51, 51, 44, 57, 57, 57, 45, 57, 57, 57,
                    57, 57, 54, 57, 57, 57, 57, 57, 57, 58, 57, 57, 57, 57, 57, 57,
                    59, 57, 54, 57, 57, 57, 59, 57, 57, 58, 59, 57, 57, 57, 57, 57,
                    57, 57, 45, 57, 58, 57, 57, 57, 57, 57, 57, 57, 57, 58, 58, 57,
                    57, 59, 59, 57, 57, 57, 57, 57, 43, 57, 57, 57, 43, 57, 57, 57,
                    57, 57, 57, 57, 57, 57, 59, 57, 54, 57, 57, 57, 54, 57, 57, 59,
                    57, 57, 57, 57, 57, 57, 57, 58, 54, 57, 57, 57, 54, 57, 57, 57,
                    57, 57, 46, 51, 51, 48, 51, 51, 53, 57, 57, 57, 54, 57, 57, 57],
                 "height":16,
                 "width":16,
                 "x":0,
                 "y":0
                }, 
                {
                 "data":[66, 67, 57, 57, 57, 98, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    78, 79, 57, 57, 57, 98, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    90, 91, 57, 57, 57, 98, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    102, 103, 57, 58, 59, 98, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    57, 57, 57, 57, 57, 98, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    57, 57, 57, 57, 57, 98, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    59, 57, 57, 57, 57, 98, 98, 98, 54, 0, 0, 0, 0, 0, 0, 0,
                    47, 51, 51, 51, 51, 51, 51, 51, 53, 0, 0, 0, 0, 0, 0, 0,
                    54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    55, 51, 51, 51, 51, 51, 51, 51, 49, 0, 0, 0, 0, 0, 0, 0,
                    57, 57, 57, 57, 57, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    57, 57, 57, 57, 58, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    58, 57, 57, 59, 57, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    116, 117, 57, 57, 57, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0],
                 "height":16,
                 "width":16,
                 "x":16,
                 "y":0
                }, 
                {
                 "data":[0, 0, 54, 108, 108, 108, 57, 57, 57, 126, 127, 57, 57, 57, 54, 57,
                    0, 0, 54, 108, 108, 108, 57, 58, 57, 138, 139, 57, 57, 57, 54, 59,
                    0, 0, 54, 108, 108, 108, 57, 57, 57, 150, 151, 57, 57, 57, 54, 57,
                    0, 0, 54, 108, 108, 108, 59, 57, 57, 57, 43, 59, 57, 57, 55, 51,
                    0, 0, 54, 108, 108, 108, 57, 59, 57, 57, 54, 57, 57, 57, 57, 57,
                    0, 0, 54, 108, 108, 108, 57, 57, 58, 59, 54, 57, 57, 57, 59, 57,
                    0, 0, 56, 51, 51, 51, 44, 57, 57, 57, 45, 57, 58, 57, 57, 57,
                    0, 0, 54, 108, 108, 108, 57, 57, 57, 57, 57, 57, 59, 57, 43, 57,
                    0, 0, 54, 108, 108, 108, 58, 57, 57, 57, 57, 57, 57, 57, 54, 57,
                    0, 0, 54, 108, 108, 108, 57, 57, 57, 57, 57, 57, 57, 57, 54, 57,
                    0, 0, 54, 108, 108, 108, 57, 59, 57, 46, 51, 51, 51, 51, 53, 57,
                    0, 0, 54, 108, 108, 108, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
                    0, 0, 54, 108, 108, 108, 57, 57, 57, 59, 59, 57, 57, 57, 57, 58,
                    0, 0, 54, 108, 108, 108, 58, 58, 57, 57, 57, 57, 57, 57, 57, 57,
                    0, 0, 54, 120, 120, 121, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133,
                    0, 0, 54, 120, 121, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133],
                 "height":16,
                 "width":16,
                 "x":-16,
                 "y":16
                }, 
                {
                 "data":[57, 57, 57, 58, 59, 54, 57, 57, 57, 57, 58, 57, 54, 57, 57, 57,
                    58, 57, 57, 57, 57, 54, 57, 57, 59, 57, 57, 57, 54, 57, 57, 57,
                    58, 57, 57, 57, 57, 54, 58, 58, 57, 57, 57, 57, 54, 57, 58, 57,
                    51, 44, 59, 57, 57, 54, 57, 57, 57, 46, 51, 51, 53, 57, 59, 57,
                    57, 57, 57, 57, 57, 54, 57, 57, 57, 57, 59, 57, 57, 57, 59, 57,
                    57, 57, 57, 57, 57, 54, 57, 59, 57, 57, 59, 57, 57, 57, 57, 57,
                    57, 57, 57, 57, 57, 54, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
                    57, 57, 46, 51, 51, 42, 51, 51, 44, 57, 57, 57, 43, 57, 57, 57,
                    58, 57, 57, 57, 57, 54, 57, 57, 57, 57, 57, 57, 54, 57, 57, 59,
                    57, 57, 57, 57, 58, 54, 57, 58, 57, 58, 58, 57, 54, 57, 57, 57,
                    57, 57, 57, 59, 57, 54, 57, 57, 57, 57, 57, 57, 55, 51, 51, 51,
                    57, 57, 47, 51, 51, 52, 51, 51, 49, 57, 59, 57, 57, 57, 57, 57,
                    57, 57, 54, 0, 0, 0, 0, 0, 54, 57, 58, 57, 57, 57, 59, 58,
                    59, 59, 54, 0, 0, 0, 0, 0, 54, 57, 57, 57, 57, 58, 57, 57,
                    133, 133, 54, 0, 0, 0, 0, 0, 54, 136, 136, 136, 136, 136, 136, 136,
                    133, 133, 54, 0, 0, 0, 0, 0, 54, 136, 136, 136, 136, 136, 136, 136],
                 "height":16,
                 "width":16,
                 "x":0,
                 "y":16
                }, 
                {
                 "data":[128, 129, 57, 57, 57, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    140, 141, 57, 58, 58, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    152, 153, 57, 57, 57, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    43, 57, 57, 58, 57, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    54, 57, 57, 57, 57, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    54, 57, 57, 57, 57, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    45, 57, 57, 57, 46, 51, 51, 51, 50, 0, 0, 0, 0, 0, 0, 0,
                    57, 57, 58, 57, 57, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    57, 57, 57, 57, 57, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    57, 57, 57, 59, 57, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    51, 44, 57, 57, 57, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    57, 57, 57, 57, 58, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    58, 57, 57, 57, 57, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    57, 57, 57, 57, 57, 110, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    136, 136, 136, 136, 136, 2684354683, 110, 110, 54, 0, 0, 0, 0, 0, 0, 0,
                    136, 136, 136, 136, 136, 136, 2684354683, 110, 54, 0, 0, 0, 0, 0, 0, 0],
                 "height":16,
                 "width":16,
                 "x":16,
                 "y":16
                }, 
                {
                 "data":[0, 0, 54, 121, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133, 133,
                    0, 0, 55, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 "height":16,
                 "width":16,
                 "x":-16,
                 "y":32
                }, 
                {
                 "data":[133, 133, 54, 0, 0, 0, 0, 0, 54, 136, 136, 136, 136, 136, 136, 136,
                    51, 51, 53, 0, 0, 0, 0, 0, 55, 51, 51, 51, 51, 51, 51, 51,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 "height":16,
                 "width":16,
                 "x":0,
                 "y":32
                }, 
                {
                 "data":[136, 136, 136, 136, 136, 136, 136, 2684354683, 54, 0, 0, 0, 0, 0, 0, 0,
                    51, 51, 51, 51, 51, 51, 51, 51, 53, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                 "height":16,
                 "width":16,
                 "x":16,
                 "y":32
                }],
         "height":64,
         "id":1,
         "name":"Tile Layer 1",
         "opacity":1,
         "startx":-16,
         "starty":-16,
         "type":"tilelayer",
         "visible":true,
         "width":48,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":3,
         "name":"Object Layer 1",
         "objects":[],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":4,
 "nextobjectid":3,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.2",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/..\/..\/stuff\/Pixels\/Tiled\/Tilemap\/SomethingInTheDark_Tileset.tsx"
        }, 
        {
         "columns":12,
         "firstgid":42,
         "image":"..\/..\/..\/TileSheet_Final.png",
         "imageheight":400,
         "imagewidth":400,
         "margin":0,
         "name":"TileSheet_Final",
         "spacing":0,
         "tilecount":144,
         "tileheight":32,
         "tilewidth":32
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.9",
 "width":30
});