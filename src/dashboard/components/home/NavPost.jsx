function NavPost({ className }) {
    return (
        <div className={`hidden custom-min:hidden md:block`} style={{ display: className }}>
            <div className="custom-min:ml-4 md:ml-0 md:bg-ground md:h-[500px] p-4 flex flex-col gap-1">
                <p>All Posts</p>
                <p>Recent Posts</p>
                <p>Articles</p>
                <p>Photo Based</p>
            </div>
        </div>
    )
}

export default NavPost
