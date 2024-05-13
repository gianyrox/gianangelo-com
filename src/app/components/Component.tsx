//string_dict

const str_dict = [
  { id: "0", msg: "Roley Me", link: "https://roley.me" },
  { id: "1", msg: "Bucket Foundation", link: "https://bucket.foundation" },
  { id: "2", msg: "AGFarms", link: "https://agfarms.dev" },
];
// let str_dict =

export default function Component({ id }: { id: number }) {
  return (
    <div className="flex w-2/3 m-auto h-2/3 p-auto justify-content align-center">
      <a href={str_dict[id].link} target="_blank">
        <div className="main_button">{str_dict[id].msg}</div>
      </a>
    </div>
  );
}
