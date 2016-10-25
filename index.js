function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

/*
Define a function increaseRankBy(n) that increases the ranks in all of
the .ranked-lists by n. (You might need to make use of parseInt()
*/
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (var i = 0; i < rankedLists.length; i++) {
    var children = rankedLists[i].children

    for (var j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  var curNode = document.getElementById('grand-node')
  var nextNode = curNode.children[0]

  while (nextNode) {
    curNode = nextNode
    nextNode = curNode.children[0]
  }

  return curNode
}
