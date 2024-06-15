/* eslint-disable */
'use client'
import React from 'react'
import CountUp from 'react-countup'
import { RenderCounterProps } from 'react-countup/build/types'
import VisibilitySensor from 'react-visibility-sensor'

export default function Count({ end }: { end: number }) {
    return (
        <CountUp end={end} delay={0.5} separator='.'>
            {({ countUpRef, start }: RenderCounterProps) => (
                <VisibilitySensor onChange={start} delayCall>
                    <span className='font-bahij' ref={countUpRef} />
                </VisibilitySensor>

            )}
        </CountUp>
    )
}
