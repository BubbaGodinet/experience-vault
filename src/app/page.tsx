"use client";

import React from 'react';
import tw from 'twin.macro'

export default function Home() {
return (
<Wrapper>
  hello
</Wrapper>
)
}

const Wrapper = tw.div`
// default/desktop //
bg-tahiti
w-screen
h-screen
p-10
rounded-2xl
overflow-hidden

// fullwidth //
fw:bg-tahiti

// tablet //
tab:bg-tahiti

// mobile //
mob:bg-bubblegum
`
