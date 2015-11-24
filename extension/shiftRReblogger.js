window.addEventListener("keydown", function(event) {
  //Mac OS X以外ではキーバインドを無効とする
  if (navigator.userAgent.match(/Mac OS X/)) {

    if (!Tumblr) {
      //window.Tumblrオブジェクトが取得できない場合エラーとする
      console.error('osx-tumblr-shift-r-reblogger : Tumblr Object is not found!');
      return;
    }

    //シフトキーとRキーが押下されている かつ ログイン状態であること
    if (event.shiftKey &&
        event.keyCode == 82 &&
        Tumblr.KeyCommands.logged_in) {
      for (l in Tumblr.KeyCommands.post_positions) {
        Tumblr.KeyCommands.fast_reblog(l, Tumblr.KeyCommands.post_positions[l]);
      }
      Tumblr.Events.trigger("keycommands:fast_reblog");
      return false;
    }
  }
}, false);
