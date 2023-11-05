
export function Card({props}){
    console.log(props)
    return (
        <div style={styles.container}>
            <image  src={props.foto} alt={props.nome} width={100} height={100}  style={{width:100, height:100, borderRadius:50}}/>
            <div style={styles.item}>
                <p style={styles.itemTitle}>Nome</p>
                <p style={styles.itemDescription}>{props.nome}</p>
            </div>
            <div style={styles.item}>
                <p style={styles.itemTitle}>E-mail</p>
                <p style={styles.itemDescription}>{props.email}</p>
            </div>
        </div>
    )
}

const styles = {
    item:{
        textAlign:"left",
        marginBottom:5
    },
    itemTitle:{
        fontSize:14,
        fontWeight:'bold',
        color:'white'
    },
    itemDescription:{
        fontSize:12,
        color:'white'
    },
    container:{
        margin:5,
        padding:5,
        width:250,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"gray",
        borderRadius:10,
    }
}