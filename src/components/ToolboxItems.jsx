import React, { Fragment } from 'react'
import TechIcon from '../components/TechIcon'
import { twMerge } from 'tailwind-merge'

const ToolboxItems = ({ Items, className, ItemsWrapperClassName }) => {
    return (
        <div className={twMerge('[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]', className)}>
            <div className={twMerge('flex flex-none gap-6 md:gap-12 py-0.5 pr-6', ItemsWrapperClassName)}>
                {[...new Array(2)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                        {
                            Items.map(item => (
                                <div key={item.title} className='flex items-center gap-4 px-3 py-1 outline-2 outline-white/10 rounded-lg'>
                                    <TechIcon component={item.icontype} />
                                    <span className='font-medium'>{item.title}</span>
                                </div>
                            ))
                        }
                    </Fragment>
                ))}

            </div>
        </div>
    )
}

export default ToolboxItems