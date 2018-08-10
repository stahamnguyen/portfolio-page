interface Props {
  frontImgPath: string;
  backImgPath: string;
  url: string;
}

const project = (props: Props) => {
  <a href={props.url}>
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  </a>;
};

export default project;
