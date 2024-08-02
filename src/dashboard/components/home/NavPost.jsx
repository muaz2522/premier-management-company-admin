function NavPost({ className }) {
    return (
        <div className={`hidden custom-min:hidden md:block`} style={{ display: className }}>
            <div className="custom-min:ml-4 md:ml-0 md:bg-ground md:h-[500px] p-4 flex flex-col gap-4">
                <h5>All Posts</h5>
                <h5>Recent Posts</h5>
                <h5>Articles</h5>
                <h5>Photo Based</h5>
            </div>
        </div>
    )
}

export default NavPost
