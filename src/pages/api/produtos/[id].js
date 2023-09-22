export async function GetServerSideProps(context) {
    const id = context.query.id;

    return {
        props: {
            id: id
        }
    }
}
function produtos(props) {
    return (
        <div>numero de produtos:{props.id}</div>
    )
}

export default produtos