import { Show, createResource, createSignal } from "solid-js";


interface Props {
  url: URL;
}


const C = (<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000"><path d="M7 4V2H17V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7ZM7 6H5V20H19V6H17V8H7V6ZM9 4V6H15V4H9Z"></path></svg>);
const P = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4V8H18V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H6ZM8 2H16V6H8V2Z"></path></svg>);

function Copy(props: Props) {
  const [pick, setPick] = createSignal<boolean>(false)
  
  const change = () => {
    setPick(true)
    navigator.clipboard.writeText(props.url.toString());
  }

  const Empty = () => {
    return (<li onClick={change} style={"width:30px;heigth:30px"}>{C}</li>);
  };

  const Full = () => {
    return (<li onClick={change}  style={"width:30px;heigth:30px"}>{P}</li>);
  };


  return (
    <Show
      when={pick()}
      fallback={<Empty />}
    >
      <Full />
    </Show>
  );
}

export default Copy;