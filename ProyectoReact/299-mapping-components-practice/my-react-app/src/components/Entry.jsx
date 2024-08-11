
function minus100(str) {
  if (str.length > 100) {
    return str.substring(0, 100) + "..." + " (click to read more)";
  } else {
    return str;
  }
}
var x = 30
function Entry(props) {
  return (
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {minus100(props.meaning)}

          </dd>
        </div>
  );
}

export default Entry;
