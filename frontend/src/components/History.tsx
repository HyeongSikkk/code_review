interface Props {
    type: Number;
    name: String;
}

function History({name="history"}: Props){
    var tagName = "history "
    return (
        <>
            <p className={tagName}>{ name }</p>
        </>
    );
}

export default History;