function NavPost({ className }) {
    return (
        <div className={`hidden custom-min:hidden md:block`} style={{ display: className }}>
            <div className="custom-min:ml-4 md:ml-0 md:bg-ground md:h-[500px] p-4 flex flex-col gap-3">
                <span className="text-black">All Posts</span>
                <span className="text-text-color">Recent Posts</span>
                <span className="text-text-color">Articles</span>
                <span className="text-text-color">Photo Based</span>
            </div>
        </div>
    )
}

export default NavPost
