var is_active = true;
var background;
var display = true;

if ((window.innerHeight < 600) || (window.innerHeight < 300)) {
  display = false;
  alert("Извините, размер страницы не позволяет использовать динамический контент.\n"+
    "Если это возможно, разверните страницу и перезагрузите.");
}

var tips = [
  "<p>" +
  "One thing that can slow you down when you are getting started or trying to " +
  "do some rapid prototyping is to export functions all the time. Rather, you " +
  "can use the compiler directive. This makes programming erlang much more " +
  "enjoyable, not to have to manually type:" +
  "</p>" +
  "<div id=\"code\">" +
  "export(function_not_an_other_one/4)." +
  "</div>" +
  "<p>" +
  "everytime you add a function and would like to test it. Rather, you can use:" +
  "</p>" +
  "<div id=\"code\">" +
  "compile(export_all)." +
  "</div>" +
  "<p>" +
  "You can manually export only the things you need to when you are done with " +
  "the program." +
  "</p>",


  "<p>" +
  "Another handy trick is to use" +
  "</p>" +
  "<div id=\"code\">" +
  "42> make:all([load])." +
  "</div>" +
  "<p>" +
  "Rather than compile the latest version all the time." +
  "</p>" +
  "<div id=\"code\">" +
  "43> c(my_module_v17)." +
  "</div>" +
  "<p>" +
  "or is it" +
  "</p>" +
  "<div id=\"code\">" +
  "44> c(my_module_v18)." +
  "</div>",


  "<p>" +
  "<i>?Module</i> in code gives the current module name, which is super helpful when " +
  "spawning." +
  "</p>" +
  "<div id=\"code\">" +
  "spawn(?Module, fun_name, arity)" +
  "</div>" +
  "<p>" +
  "Otherwise, you need to change the module name in every spawn every time you " +
  "change the name of the module." +
  "</p>",


  "<p>" +
  "If you would like to keep an eye on a process you can monitor it, after you " +
  "have registered it." +
  "</p>" +
  "<div id=\"code\">" +
  "45> register(my_loop, spawn(my_module, my_loop, []))." +
  "<br>" +
  "46> Mon_my_loop = erlang:monitor(process, my_loop)." +
  "</div>",


  "<p>" +
  "A helpful utility function is rpc." +
  "</p>" +
  "<div id=\"code\">" +
  "rpc(Dest, Msg) -> <br>" +
  "&nbsp;&nbsp;To ! {self(), Msg}, <br>" +
  "&nbsp;&nbsp;receive <br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;{Dest, Answer} -> Answer <br>" +
  "&nbsp;&nbsp;after 1000 -> <br>" +
  "&nbsp;&nbsp;&nbsp;&nbsp;{Dest, did_not_answer_msg, Msg} <br>" +
  "&nbsp;&nbsp;end. <br>" +
  "</div>" +
  "This helps keep synchronous commands between processes from getting answers " +
  "from the wrong process. We force the identification of the process providing "+
  "the answer, and sequential queuing should handle the rest."
];

function togle_active () {
  is_active = !is_active;
}

function random_tip () {
  return tips[Math.floor(Math.random()*tips.length)];
}

function enter () {
  if (display && is_active) {
    var elem = document.getElementById("tip");
    elem.style.left = "-15px";
    background = elem.style["background-image"];
    elem.style["background-image"] = "none";
    elem.innerHTML = random_tip();
  }
}

function leave () {
  if (display && is_active) {
    var elem = document.getElementById("tip");
    elem.style["background-image"] = background;
    elem.style.left = "-290px";
    elem.innerHTML = "";
  }
}
