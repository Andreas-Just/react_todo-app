(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,o){e.exports=o(20)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(7),r=o.n(l),c=(o(15),o(16),o(17),function(e){var t=e.title;return a.a.createElement("h1",{className:"title"},t)});c.defaultProps={title:"Simple title"};var i=o(2),d=o(9),s=o(3),u=o(8),m=o(5),f=o(4),p=o(1),E=o.n(p),b=function(e){Object(m.a)(o,e);var t=Object(f.a)(o);function o(){var e;Object(s.a)(this,o);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:""},e.setTitle=function(t){var o=t.target.value.slice(0,37);e.setState({title:o})},e.validateForm=function(t){t.preventDefault(),e.setState((function(t){return""===t.title.trim()?"":(e.props.addTodo({id:+new Date,title:t.title,completed:!1,isEditable:!1}),{title:""})}))},e.render=function(){var t=e.state.title;return a.a.createElement("header",{className:E()("header")},a.a.createElement("form",{onSubmit:e.validateForm},a.a.createElement("input",{className:E()("new-todo"),placeholder:"Click to add task",type:"text",onChange:e.setTitle,onBlur:e.validateForm,value:t})))},e}return o}(n.Component),g=function(e){Object(m.a)(o,e);var t=Object(f.a)(o);function o(){var e;Object(s.a)(this,o);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={editValue:""},e.setEditValue=function(t){var o=t.target;e.setState({editValue:o.value})},e.render=function(){var t=e.props,o=t.todo,n=t.onToggle,l=t.onDelete,r=t.onEdit,c=t.handleKeyPress,i=t.setEditedValue,d=e.state.editValue;return a.a.createElement("li",{className:E()(o.completed&&"completed",o.isEditable&&"editing")},a.a.createElement("div",{className:E()("view")},a.a.createElement("input",{type:"checkbox",className:E()("toggle"),onChange:n,checked:o.completed}),a.a.createElement("label",{className:E()(o.completed&&"checked"),htmlFor:"todo-".concat(o.id),onDoubleClick:r},o.title),a.a.createElement("button",{type:"button",className:E()("destroy"),onClick:l})),o.isEditable&&a.a.createElement("input",{type:"text",className:"edit",defaultValue:o.title,autoFocus:!0,onChange:e.setEditValue,onKeyDown:function(e){return c(e,o.id,d)},onBlur:function(e){return i(e,o.id,d)}}))},e}return o}(n.Component),h=function(e){var t=e.items,o=e.onToggleTodo,n=e.onDeleteTodo,l=e.onEditTodo,r=e.handleKeyPress,c=e.setEditedValue;return a.a.createElement("ul",{className:E()("todo-list")},t.map((function(e){return a.a.createElement(g,{key:e.id,todo:e,onToggle:function(){return o(e.id)},onDelete:function(){return n(e.id)},onEdit:function(){return l(e.id)},handleKeyPress:r,setEditedValue:c})})))},v=(o(18),function(e){var t=e.todos,o=e.visibleTodos,n=e.onToggleTodoCompleted,l=e.onDeleteCurrentTodo,r=e.onToggleAllCompleted,c=e.onEditCurrentTodo,i=e.handleKeyPress,d=e.setEditedValue,s=t.every((function(e){return e.completed}));return a.a.createElement("section",{className:"main"},a.a.createElement("label",{className:E()("label",{"label-checked-all":s}),htmlFor:"toggle-all"},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:r,checked:s}),"Mark all as complete"),a.a.createElement(h,{items:o,onToggleTodo:n,onDeleteTodo:l,onEditTodo:c,handleKeyPress:i,setEditedValue:d}))}),T={all:"All",active:"Active",completed:"Completed"},C=function(e){var t=e.onFilter,o=e.selectedFilter;return a.a.createElement("ul",{className:E()("filters")},Object.values(T).map((function(e){return a.a.createElement("li",{key:e},a.a.createElement("a",{href:"#/".concat(e),className:E()(o===e&&"selected"),onClick:function(){return t(e)}},e))})))},y=function(e){var t=e.currentFilter,o=e.todos,n=e.onClearCompleted,l=e.onSetFilter,r=o.filter((function(e){return!e.completed})).length;return a.a.createElement("footer",{className:E()("footer")},a.a.createElement("span",{className:E()("todo-count")},"".concat(r," items left")),a.a.createElement(C,{onFilter:l,selectedFilter:t}),o.some((function(e){return e.completed}))&&a.a.createElement("button",{type:"button",className:E()("clear-completed"),onClick:n},"Clear completed"))},O=(o(19),function(e){Object(m.a)(o,e);var t=Object(f.a)(o);function o(){var e;Object(s.a)(this,o);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={todos:JSON.parse(localStorage.getItem("todos"))||[],selectedFilter:T.all},e.addTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(d.a)(e.todos),[t])}}))},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.handleClearCompleted=function(){e.setState((function(e){return{todos:e.todos.filter((function(e){return!e.completed}))}}))},e.toggleTodoCompleted=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id!==t?e:Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed})}))}}))},e.toggleAllCompleted=function(){e.setState((function(e){return e.todos.every((function(e){return e.completed}))?{todos:e.todos.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{completed:!1})}))}:{todos:e.todos.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{completed:!0})}))}}))},e.setFilter=function(t){e.setState({selectedFilter:t})},e.filterTodos=function(){switch(e.state.selectedFilter){case T.active:return e.state.todos.filter((function(e){return!e.completed}));case T.completed:return e.state.todos.filter((function(e){return e.completed}));case T.all:return e.state.todos.filter((function(e){return e.id}));default:return e.state.todos}},e.setEditableState=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id!==t?Object(i.a)(Object(i.a)({},e),{},{isEditable:!1}):Object(i.a)(Object(i.a)({},e),{},{isEditable:!0})}))}}))},e.handleKeyPress=function(t,o,n){"Escape"===t.key&&e.setState((function(e){return{todos:e.todos.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{isEditable:!1})}))}})),"Enter"===t.key&&e.setEditedValue(t,o,n)},e.setEditedValue=function(t,o,n){t.target.value||e.deleteTodo(o),e.setState((function(e){return{todos:e.todos.map((function(e){return e.id!==o?e:Object(i.a)(Object(i.a)({},e),{},{title:n||e.title,isEditable:!1})}))}}))},e.render=function(){var t=e.state,o=t.todos,n=t.selectedFilter,l=e.filterTodos();return a.a.createElement("section",{className:"todoapp"},a.a.createElement(b,{addTodo:e.addTodo}),o.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(v,{todos:o,visibleTodos:l,onToggleAllCompleted:e.toggleAllCompleted,onToggleTodoCompleted:e.toggleTodoCompleted,onDeleteCurrentTodo:e.deleteTodo,onEditCurrentTodo:e.setEditableState,handleKeyPress:e.handleKeyPress,setEditedValue:e.setEditedValue}),a.a.createElement(y,{todos:o,onSetFilter:e.setFilter,currentFilter:n,onClearCompleted:e.handleClearCompleted})))},e}return Object(u.a)(o,[{key:"componentDidUpdate",value:function(){localStorage.setItem("todos",JSON.stringify(this.state.todos))}}]),o}(n.Component));var j=function(){return a.a.createElement("section",{className:"todoapp"},a.a.createElement(c,{title:"Todo App"}),a.a.createElement(O,null))};r.a.render(a.a.createElement(j,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.56f41581.chunk.js.map