import Button from "./Button";

const ButtonList = () => {
    const buttons = ['All', 'JavaScript', 'Node js', 'System Design', 'Computer Science', 'Data Science', 'Machine Learning', 'Music', 'Sports', 'Words', 'Mixes', 'Stocks', 'Podcasts'];
    return(
        <div className="flex items-center gap-4 overflow-x-auto">
            <Button btnNames={buttons}/>
        </div>
    )
}

export default ButtonList;