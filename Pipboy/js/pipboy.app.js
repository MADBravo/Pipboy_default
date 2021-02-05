
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
              }
              });

             $('.item-list a').on('click', function(e){
                if('.apparel .chests') {
                $('.item-list a.chests').removeClass('active');
                $(e.currentTarget).addClass('active');
              }
            });

            $('.item-list a').on('click', function(e){
               if('.apparel .arms') {
               $('.item-list .arms').removeClass('active');
               $(e.currentTarget).addClass('active');
             } else if (e.currentTarget.active) {
               $(e.currentTarget).removeClass('active');
             }
            });


              /* Turn into a switch statement?*/





              $('.item-list a, .item-list a .active').on('mouseover', function(e){
                var current_item = $(e.currentTarget).attr('class');

                for(item in weapons) {
                  if(weapons[item].name == current_item) {
                    console.log(weapons[item]);

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

              $('.item-list a, .item-list .active').on('mouseover', function(e){
                var current_item = $(e.currentTarget).attr('class');
                // console.log(current_item); //

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

              var zoomer = (function () {
    var img_ele = null,
      x_cursor = 0,
      y_cursor = 0,
      x_img_ele = 0,
      y_img_ele = 0,
      orig_width = document.getElementById('zoom-img').getBoundingClientRect().width,
      orig_height = document.getElementById('zoom-img').getBoundingClientRect().height,
      current_top = 0,
      current_left = 0,
      zoom_factor = 1.0;

    return {
        zoom: function (zoomincrement) {
            img_ele = document.getElementById('zoom-img');
            zoom_factor = zoom_factor + zoomincrement;
            if (zoom_factor <= 1.0)
            {
                zoom_factor = 1.0;
                img_ele.style.top =  '0px';
                img_ele.style.left = '0px';
            }
            var pre_width = img_ele.getBoundingClientRect().width, pre_height = img_ele.getBoundingClientRect().height;
            console.log('prewidth='+img_ele.getBoundingClientRect().width+'; pre_height ='+img_ele.getBoundingClientRect().height);
        //  img_ele.style.width = (pre_width * zoomincrement) + 'px';
        //  img_ele.style.height = (pre_height * zoomincrement) + 'px';
            var new_width = (orig_width * zoom_factor);
            var new_heigth = (orig_height * zoom_factor);

                console.log('postwidth='+img_ele.style.width+'; postheight ='+img_ele.style.height);

            if (current_left < (orig_width - new_width))
            {
                current_left = (orig_width - new_width);
            }
            if (current_top < (orig_height - new_heigth))
            {
                current_top = (orig_height - new_heigth);
            }
            img_ele.style.left = current_left + 'px';
            img_ele.style.top = current_top + 'px';
            img_ele.style.width = new_width + 'px';
            img_ele.style.height = new_heigth + 'px';

            img_ele = null;
        },

        start_drag: function () {
          if (zoom_factor <= 1.0)
          {
             return;
          }
          img_ele = this;
          x_img_ele = window.event.clientX - document.getElementById('zoom-img').offsetLeft;
          y_img_ele = window.event.clientY - document.getElementById('zoom-img').offsetTop;
          console.log('img='+img_ele.toString()+'; x_img_ele='+x_img_ele+'; y_img_ele='+y_img_ele+';')
          console.log('offLeft='+document.getElementById('zoom-img').offsetLeft+'; offTop='+document.getElementById('zoom-img').offsetTop)
        },

        stop_drag: function () {
          if (img_ele !== null) {
            if (zoom_factor <= 1.0)
            {
              img_ele.style.left = '0px';
              img_ele.style.top =  '0px';
            }
            console.log(img_ele.style.left+' - '+img_ele.style.top);
            }
          img_ele = null;
        },

        while_drag: function () {
            if (img_ele !== null)
            {
                var x_cursor = window.event.clientX;
                var y_cursor = window.event.clientY;
                var new_left = (x_cursor - x_img_ele);
                if (new_left > 0)
                {
                    new_left = 0;
                }
                if (new_left < (orig_width - img_ele.width))
                {
                    new_left = (orig_width - img_ele.width);
                }
                var new_top = ( y_cursor - y_img_ele);
                if (new_top > 0)
                {
                    new_top = 0;
                }
                if (new_top < (orig_height - img_ele.height))
                {
                    new_top = (orig_height - img_ele.height);
                }
                current_left = new_left;
                img_ele.style.left = new_left + 'px';
                current_top = new_top;
                img_ele.style.top = new_top + 'px';

                //console.log(img_ele.style.left+' - '+img_ele.style.top);
            }
        }
    };
} ());

document.getElementById('zoomout').addEventListener('click', function() {
  zoomer.zoom(-0.25);
});
document.getElementById('zoomin').addEventListener('click', function() {
  zoomer.zoom(0.25);
});

document.getElementById('zoom-img').addEventListener('mousedown', zoomer.start_drag);
document.getElementById('zoom-container').addEventListener('mousemove', zoomer.while_drag);
document.getElementById('zoom-container').addEventListener('mouseup', zoomer.stop_drag);
document.getElementById('zoom-container').addEventListener('mouseout', zoomer.stop_drag);






});
