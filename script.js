
//my list of todo
let todoList = [];

//when i click the add button
function addToList() {
    const item = document.getElementById("todoInput").value;
    const obj = {
        contents: item, //object의 컨텐츠 속성을 추가. 값을 todolist에 input하는 값으로 설정
        isDone: false   //object의 isDone 속성을 추가. 값을 false로 설정 
    };
    if (item == ''){ 
      return
    } 
    todoList.push(obj); // todoList 배열의 element값에 object의 값(contents 및 isDone 두가지 속성을 설정)이 출력되도록 함.

    updateTodoList(todoList); // todoList 배열에 updateTodoList 기능 수행 할 수 있도록 함.
};
function updateTodoList(arr) {
  
    const html = arr.map((obj, index) => {
        let isthisdone = obj.isDone ? 'undone' : 'done';
        //means:
        // if (obj.isDone == true){
        //     isthisdone='undone'
        // }else {
        //     isthisdone='done'
        // }
        return `<li class="${obj.isDone ? 'done' : 'undone'}"> 
                  ${obj.contents} 
                  <a href= "#" onclick= "remove(${index})" > Delete   </a> 
                  <a href= "#" onclick= "toggleDone(${index})"> ${isthisdone} </a>
                </li>`
    });
    // map기능을 사용하여 모든 todolist 배열 element에 기능을 더할 수 있도록 설정.
    //버튼을 click하여 tobbleDone 기능을 부름. toggleDone을 부르면 object의 값이 true (flip 했기 때문에) 가 됨 
    //--> true이면 li class가 done이 되도록 설정.
    //--> .done 에 스트라이프 스타일을 지정.
    document.getElementById("todoList").innerHTML = html.join(''); // 빈칸으로 각각의 element가 이어질 수 있도록 함 (,를 없앰)
    empty();
};
function empty() {
    document.getElementById("todoInput").value = "";
};
function remove(index) {
    todoList.splice(index, 1); // todoList 배열에 index번째에 있는 1가지 element를 지움
    updateTodoList(todoList);
};

function toggleDone(index) {
    todoList[index].isDone = !(todoList[index].isDone);
    updateTodoList(todoList);
};
//TodoList 배열의 값의 object중 .isDone의 값을 (기본 false로 설정되어있는것을) !(플립)하여 true로 바꿈.

function doneList () {
   let doneList = todoList.filter ((todo) => todo.isDone == true)
   return updateTodoList (doneList)
}

function undoneList () {
   let undoneList = todoList.filter ((todo) => todo.isDone ===false)
   return updateTodoList (undoneList)
}

function filterList() {
    console.log('hello');
    let idx = document.getElementById('filterSection').selectedIndex;
    if(idx == 1) {
        doneList();
    } else if(idx == 2) {
        undoneList();
    } else {
        updateTodoList(todoList); // show everything
    }
}