import "./Widgets.css";

export const KeyTools = () => {
    return (
        <div id="key-tools-card" className="p-4 mt-3">
            <h5 className="font-bold">Key Tools <i className="fa-solid fa-circle-question question-icon ms-2"></i></h5>
            <div className="d-flex flex-wrap">
                {/* Next div is the one to map thorough */}
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <img className="widget-images" src="https://imgs.search.brave.com/EnSbF7xl0cbuIYEmbHd0m7F6jDvxmL1ISN2X7RuAGxU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNy9QeXRo/b24tUE5HLUZpbGUu/cG5n" alt="Tool logo." />
                    <p className="font-small ms-3 mb-0">Python</p>
                </div>
                {/* Following 3 divs are just placeholders, to see if layout is working */}
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <img className="widget-images" src="https://imgs.search.brave.com/EnSbF7xl0cbuIYEmbHd0m7F6jDvxmL1ISN2X7RuAGxU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNy9QeXRo/b24tUE5HLUZpbGUu/cG5n" alt="Tool logo." />
                    <p className="font-small ms-3 mb-0">Python</p>
                </div>
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <img className="widget-images" src="https://imgs.search.brave.com/EnSbF7xl0cbuIYEmbHd0m7F6jDvxmL1ISN2X7RuAGxU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNy9QeXRo/b24tUE5HLUZpbGUu/cG5n" alt="Tool logo." />
                    <p className="font-small ms-3 mb-0">Python</p>
                </div>
                <div className="widget-card d-flex align-items-center p-3 m-3">
                    <img className="widget-images" src="https://imgs.search.brave.com/EnSbF7xl0cbuIYEmbHd0m7F6jDvxmL1ISN2X7RuAGxU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNy9QeXRo/b24tUE5HLUZpbGUu/cG5n" alt="Tool logo." />
                    <p className="font-small ms-3 mb-0">Python</p>
                </div>
            </div>
        </div>
    )
}
