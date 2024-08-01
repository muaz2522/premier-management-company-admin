import { InnerAlignmentIcon } from '@/assets/icons';

function Strategic() {
    return (
        <section>
            <div>
                <h3>Our Services</h3>
                <h1>Strategic Business Management</h1>
                <div>
                    <div>
                        {/* Icon */}
                        <h3>Project Management</h3>
                    </div>
                </div>
            </div>
            <h1>Building Experience & Give & High Success Rates</h1>
            <div>
                <div>
                    <div>
                        <h1>900+</h1>
                        <h3>Gave Advices</h3>
                    </div>
                </div>
                <div>
                    <p>Lorem, ipsum dolor sit amet odit reprehenderit quos omnis.</p>
                    <div className="py-8 flex flex-col gap-4 text-text-color">
                        <div className="flex items-center gap-2">
                            {InnerAlignmentIcon && <InnerAlignmentIcon />}
                            <span>Lorem, ipsum dolor sit</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {InnerAlignmentIcon && <InnerAlignmentIcon />}
                            <span>Lorem, ipsum dolor sit</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {InnerAlignmentIcon && <InnerAlignmentIcon />}
                            <span>Lorem, ipsum dolor sit</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img />
                </div>
            </div>
        </section>
    )
}

export default Strategic
