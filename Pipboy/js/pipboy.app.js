
$(document).ready(function(){
  var weapons = [{
                    "name":"44_pistol",
                    "damage": 48,
                    "fire_rate": 6,
                    "range": 119,
                    "accuracy": 66,
                    "weight": 4.2,
                    "val": 99,
                },
                {
                    "name":"10mm_pistol",
                    "damage": 18,
                    "fire_rate": 46,
                    "range": 119,
                    "accuracy": 61,
                    "weight": 4.2,
                    "val": 53,
                },
                {
                    "name":"assault_rifle",
                    "damage": 30,
                    "fire_rate": 40,
                    "range": 119,
                    "accuracy": 72,
                    "weight": 12.1,
                    "val": 144,
                }
              ];

    var apparel = [{
                      "name":"raider_chest_1",
                      "dam_resist": 24,
                      "eng_resist": 20,
                      "weight": 17,
                      "val": 48,
                  },
                  {
                      "name":"raider_chest_2",
                      "dam_resist": 4,
                      "eng_resist": 2,
                      "weight": 7,
                      "val": 18,
                  },
                  {
                      "name":"raider_arm",
                      "dam_resist": 1,
                      "eng_resist": 1,
                      "weight": 3,
                      "val": 18,
                  }
                ];

              $('.item-list a').on('click', function(e){
                if('.weapons') {
                $('.item-list a').removeClass('active');
                $(e.currentTarget).addClass('active');
              } else if(".apparel") {
                $(e.currentTarget).addClass('active');
              }
              });



              $('.item-list a').on('mouseenter', function(e){
                var current_item = $(e.currentTarget).attr('class');
                console.log(current_item);

                for(item in weapons){
                  if(weapons[item].name == current_item) {
                    console.log(weapons[item])

                    var container = $('.item-stats');
                    container.find('.damage').html(weapons[item].damage);
                    container.find('.fire_rate').html(weapons[item].fire_rate);
                    container.find('.range').html(weapons[item].range);
                    container.find('.accuracy').html(weapons[item].accuracy);
                    container.find('.weight').html(weapons[item].weight);
                    container.find('.val').html(weapons[item].val);
                  }
                }
              });

              $('.item-list a').on('mouseenter', function(e){
                var current_item = $(e.currentTarget).attr('class');
                console.log(current_item);

                for(item in apparel){
                  if(apparel[item].name == current_item) {
                    console.log(apparel[item])

                    var container = $('.item-stats');
                    container.find('.dam_resist').html(apparel[item].dam_resist);
                    container.find('.eng_resist').html(apparel[item].eng_resist);
                    container.find('.weight').html(apparel[item].weight);
                    container.find('.val').html(apparel[item].val);
                  }
                }
              });

});
