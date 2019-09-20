import $ from 'jquery'

// this may required for typescript finding typings
import 'jquery-mockjax';

require('jquery-mockjax')($, window);

import './index.css';

$.mockjax({
  url: "/data.json",
  responseText: {
    hello: 'jquery-mockjax'
  }
});

const button = document.getElementById('button')!;
const message = document.getElementById('message')!;

button.onclick = async () => {
  const response = await $.get('/data.json');
  console.log(response);
  message.innerText = JSON.stringify(response, null, 4);
}
