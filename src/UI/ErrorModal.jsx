import classes from './ErrorModal.module.css'
export default function ErrorModal(props){
    

    

    return <>
        <div  className={classes.backdrop} onClick={props.onError}/>
        <div className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>

            <div className={classes.header}>
                <p>{props.message}</p>
            </div>

            <footer>
                <button className={classes.button} onClick={props.onError}>Cancel</button>
            </footer>
         </div>
    </>
}