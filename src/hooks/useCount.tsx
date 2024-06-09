'use client'
import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export default function Count({ end }: { end: number }) {
    return (
        <CountUp end={end} delay={0.5} separator='.'>
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayCall>
                    <span className='font-bahij' ref={countUpRef}>
                    </span>
                </VisibilitySensor>

            )}
        </CountUp>
    )
}
