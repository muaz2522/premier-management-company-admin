function NewBusiness({ width = "18px", height = "14px" }) {
    return (
        <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="100" height="100" fill="url(#pattern0_0_76)" />
            <defs>
                <pattern id="pattern0_0_76" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_0_76" transform="scale(0.00195312)" />
                </pattern>
                <image id="image0_0_76" width="512" height="512" xlink:href="data:image/png;base64,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" />
            </defs>
        </svg>

    )
}

export default NewBusiness
