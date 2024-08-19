function PageNotFound() {
    return (
        <div className="flex items-center justify-center fixed -top-50 left-0 bg-black/15 w-full h-full">
        <div className="shadow-lg bg-white p-24">
            <p className="text-3xl font-medium">Error 404 Invalid Url Path</p>
            <p className="text-5xl font-bold">Page Not Found</p>
        </div>
        </div>
    )
}

export default PageNotFound
