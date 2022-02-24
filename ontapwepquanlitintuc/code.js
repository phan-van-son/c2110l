 
function cblog() {
	 
	alert("Tạo bài viết thành công!");

	localStorage.setItem("tieude", document.getElementById("td").value);
	localStorage.setItem("anh", document.getElementById("img").value);
	localStorage.setItem("noidung", document.getElementById("nn").value);
 

	window.open('blog.html','_blank');

		// alert("Tạo bài viết thành công!");


return false;

}