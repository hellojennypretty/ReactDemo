/**
 * Created by Administrator on 2016/6/13.
 */
$("#fileList").delegate(".filelist","mouseup",function(e){
    tar = $(e.target);
    if(e.button == 2){
        var top = e.pageY;
        var px =  e.pageX;
        var menu = $("#folderContextMenu");
        top+menu.outerHeight()>$(window).height() && (top-=menu.height()-10);
        px+menu.outerWidth()>$(window).width() && (px-=menu.width());
        contextMenuClass = {display:"block",left:px-10,top:top-20};
        window.fileList.update();
    }else{
        if(tar.hasClass('i-preview')){
            alert("预览");
        }else if(tar.hasClass('i-sendlink')){
            alert("分享");
        }else if(tar.hasClass('i-download')){
            alert("下载");
        }else if(tar.hasClass('i-delete')){
            alert("删除");
        }else if(tar.hasClass('item-checkbox')){
            var index = $(e.currentTarget).index();
            if(tar[0].checked){
                data[index].is_selected = false;
            }else{
                data[index].is_selected = true;
            }
            window.fileList.update();
        }
    }
});
$("#fileList").delegate(".filelist","mouseenter",function(e){
    var tar = $(e.currentTarget);
    tar.addClass("hover");
});
$("#fileList").delegate(".filelist","mouseleave",function(e){
    var tar = $(e.currentTarget);
    tar.removeClass("hover");
});
$("#fileList").delegate(".pop-menu","mouseleave",function(e){
    contextMenuClass = {display:"none"};
    window.fileList.update();
});
$("#fileList").delegate(".iconMore","click",function(e){
    var top = e.pageY;
    var px =  e.pageX;
    var menu = $("#folderContextMenu");
    top+menu.outerHeight()>$(window).height() && (top-=menu.height()-10);
    px+menu.outerWidth()>$(window).width() && (px-=menu.width());
    contextMenuClass = {display:"block",left:px-10,top:top-20};
    window.fileList.update();
});
$("#fileList").delegate(".pop-menu","mouseup",function(e){
    var tar = $(e.target);
    if(tar.hasClass('share')){
        alert("分享");
    }else if(tar.hasClass('rename')){
        alert("重命名");
    }else if(tar.hasClass('copymove')){
        alert("移动复制");
    }else if(tar.hasClass('remove')){
        alert("删除");
    }else if(tar.hasClass('openFolder')){
        alert("查看文件夹");
    }
});
$("#btnChange").click(function(e){
    if(model == "list"){
        model = "icon";
    }else{
        model = "list";
    }
    window.fileList.update();
});





