// 服务测试

var Notebook = require('notebook');
var Note = require('note');
var Api = require('api');
var User = require('user');
var Server = require('server');

/*
Notebook.addNotebook("1", "life");
Notebook.addNotebook("2", "生活");
Notebook.addNotebook("3", "工作");
Notebook.addNotebook("4", "life2", "1");

Api.addNotebook({
  Title: "哈哈"
}, function() {});
*/
Api.uploadImage();
/*
User.userId = '54bdc65599c37b0da9000002';
// console.log(User.getCurActiveUserId());
Note.getDirtyNotes(function(ret) {
  console.log(ret);
});
/*
Note.getNoteByServerNoteId("54c6313799c37bdeec000008", function(ret){ 
  console.log(ret);
});
*/

// Api.auth('c@a.com', 'abc123');
// var content = '<img src="http://localhost:9000/api/file/getImage?fileId=54c2083f99c37bea5f000001"> <img src="http://localhost:9000/api/file/getImage?fileId=54c2083f99c37bea5f000001">' + "\n" + '<img src="http://localhost:9000/api/file/getImage?fileId=54c2083f99c37bea5f000001">';
// var reg = new RegExp('<img *src="' + Api.leanoteUrl + '/api/file/getImage', 'g');
// content = content.replace(reg, '<img src="' + Server.localUrl + '/api/file/getImage');
// console.log(content);

/*
var content = '<p>lifedddddd</p><p><img src="app://leanote/data/54bdc65599c37b0da9000002/images/1422368307147_2.png" alt="" data-mce-src="app://leanote/data/54bdc65599c37b0da9000002/images/1422368307147_2.png" style="display: block; margin-left: auto; margin-right: auto;"></p><p><img src="http://127.0.0.1:8008/api/file/getImage?fileId=54c7ae27d98d0329dd000000" alt="" data-mce-src="http://127.0.0.1:8008/api/file/getImg?fileId=54c7ae27d98d0329dd000000"></p><p><br></p><p><img src="http://127.0.0.1:8008/api/file/getImage?fileId=54c7ae855e94ea2dba000000" alt="" data-mce-src="http://127.0.0.1:8008/api/file/getImage?fileId=54c7ae855e94ea2dba000000" style="display: block; margin-left: auto; margin-right: auto;"></p><p><br></p><p><br></p>';
// http://127.0.0.1:8008/api/file/getImage?fileId=54c7ae27d98d0329dd000000
// var reg = new RegExp('http://127.0.0.1:8008/api/file/getImage?fileId=([0-9a-zA-Z]{24})', 'g');
var reg = new RegExp("http://127.0.0.1:8008/api/file/getImage\\?fileId=([0-9a-zA-Z]{24})", 'g');
var fileIds = [];
while((result = reg.exec(content)) != null) {
  // result = [所有, 子表达式1, 子表达式2]
    console.log(result);
}
console.log("??");
*/