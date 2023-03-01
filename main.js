function onFilter(e) {
    const text=e.target.toLowerCase();
    const items=item.getElementByTagName('li');
    Array.from(items).forEach(function(item) {
        const itemName=item.firstChild.textContent;
        const description=item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1|| description.toLowerCase().index(text)!=-1) {
            item.style.display='block';
        }else {
            item.style.display='none';
        }
    })
}