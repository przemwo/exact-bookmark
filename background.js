const contextMenuId = {
    addBookmark: "addBookmark"
};

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        "id": contextMenuId.addBookmark,
        "title": "Add bookmark here",
        "contexts": [
            "page",
            "selection",
        ],
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId === contextMenuId.addBookmark) {
        console.log('add bookmark here')
    };
});