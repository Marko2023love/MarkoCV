$(document).ready(function() {
  // 监听图片的点击事件
  $('img[data-toggle="modal"]').click(function() {
    // 获取对应的轮播组件的 ID 和图片列表
    var target = $(this).data('target');
    var carousel = $(this).data('carousel');
    var images = $(carousel).find('.item img');
    
    // 根据图片的索引来设置轮播组件的图片列表
    images.each(function(index) {
      $(this).attr('src', 'image' + (index + 1) + target.slice(-1) + '.jpg');
    });
  });
  
  // 初始化所有轮播组件
  $('.carousel').carousel();
  
  // 监听模态框的关闭事件
  $('.modal').on('hidden.bs.modal', function () {
    // 重置所有轮播组件
    $('.carousel').carousel(0);
  });
});
```