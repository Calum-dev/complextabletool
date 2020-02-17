javascript:var table,footnote="",footnoteRun=!1;
!function(t){
	t("table").removeAttr("bgcolor"),t("td").removeAttr("bgcolor"),t("th").removeAttr("bgcolor"),document.addEventListener("click",function e(o){
		(table=o.target.closest("table")).style.backgroundColor="red",t(table).attr("border","1"),t("td, th").css("text-align","left");
		var n=prompt("Number of rows to include in table header: ","Enter a number");
		t(table).find("td, th").html(function(t,e){
			return e.replace(/&nbsp;
			/g,"")
		});
		var r=["colspan","rowspan","width"];
		t(table).find("td, th").each(function(){
			for(var e=this.attributes,o=e.length;o--;){
				var n=e[o];
			-1==t.inArray(n.name,r)&&this.removeAttributeNode(n)}
			var a=t(this).find("*").not("a[href]");
			for(o=a.length-1;o>=0;o--){
				var l=a[o];
			t(l).replaceWith(l.innerHTML)}
		})
		,t(table).find("tr").each(function(){
			var e=t(this).find("td, th").length,o=0;
			t(this).find("td, th").each(function(){
			""==t(this).text().trim()&&(o+=1)})
			,o==e&&t(this).remove()
		});
		var a=function(t){
			var e=0,o=t.rows;
			if(o.length>0)for(var n=o[0].cells,r=0,a=n.length;r<a;++r)e+=n[r].colSpan;
		return e}
		(table),l=t(table).find("tr:first td, th").length;
		1==l&&(alert(l),t(table).find("tr:first td:first").attr("colspan")>=a&&t(table).find("tr:first").remove());
		var i=t(table).find("tr:last td").length,f=(t(table).length,t(table).find("tr")),d=1;
		for(t("hr").remove(),t("p").filter(function(){
		return""==t.trim(this.innerHTML)})
		.remove();1==i;)t(f).eq(t(f).length-d).find("td:first").attr("colspan")>=a&&(footnote=""==footnote?t(f).eq(t(f).length-d).text():t(f).eq(t(f).length-d).text()+"<br />"+footnote,t(f).eq(t(f).length-d).remove()),d++,i=t(f).eq(t(f).length-d).find("td").length;
		if(d=1,""==footnote)for(var h=!0;h;){
			var b=t(f).eq(t(f).length-d),s=t(b).children();
			if(""==t(s).eq(0).text())break;
			for(var c=1;c<s.length;c++)if(""!=t(s).eq(c).text()){
				h=!1;
			break}
		h&&(footnote=""==footnote?t(f).eq(t(f).length-d).text():t(f).eq(t(f).length-d).text()+"<br />"+footnote,t(f).eq(t(f).length-d).remove(),d++)}
		if(""==footnote){
			var p=t(table).nextUntil(":not(font,br)");
			for(c=0;c<t(p).length;c++)t(p).eq(c).is("font")&&(footnote=""==footnote?t(p).eq(c).text():footnote+"<br />"+t(p).eq(c).text());
		t(p).remove()}
		footnoteRun||(t(table).after("<p>"+footnote+"</p>"),footnoteRun=!0),alert("footnote: "+footnote);
		for(c=0;c<n;c++){
			var v=t("<tr></tr>").append(t(table).find("tbody tr:first td").map(function(e,o){
				return t("<th>").attr({
				colspan:t(this).attr("colspan"),rowspan:t(this).attr("rowspan"),width:t(this).attr("width")})
			.append(o.textContent).get(0)})
			);
		t(table).find("tbody tr:first").remove(),0==t(table).find("thead").length?t(table).prepend(t("<thead></thead>").append(v)):t(table).find("thead").append(v)}
		var u,m,g=table.outerHTML+footnote;
		console.log(g),u=g,(m=document.createElement("textarea")).value=u,m.setAttribute("readonly",""),m.style={
		position:"absolute",left:"-9999px"},
		document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m),alert("Markup for selected table has been copied to clipboard"),document.removeEventListener("click",e,!1)
	})
}
(jQuery);