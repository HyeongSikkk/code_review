interface Props {
    type: Number;
    name: String;
}

function History({type=1, name="history"}: Props){
    var historyType= type === 1 ? "solve" : "optim";
    var tagName = "history " + historyType;
    return (
        <>
            <p className={tagName}>{ name }</p>
        </>
    );
}

export default History;