
const ElementMain=(props)=>{
    let {title} =props.state;
    return(
        <section class="golova_info">
        <h3>{title}</h3>
        <div class="scroll">
            <div class="navigator">
                <div class="img"><img src="" alt="" /></div>
                <div class="img"><img src="" alt="" /></div>
            </div>
            <div class="scroll_slider">
                <div class="blok">
                    <div class="img"><img src="" alt="" /></div>
                    <p></p>
                </div>
            </div>
        </div>
    </section>
    )
}
export {ElementMain}