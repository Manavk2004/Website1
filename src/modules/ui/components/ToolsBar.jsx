import React from 'react'
import git from "/git.svg"
import gh from "/gh.svg"
import vscode from "/vscode.svg"
import docker from "/docker.svg"
import pycharm from "/pycharm.svg"

function ToolsBar() {
  return (
    <div className='w-full bg-[#1a1823] text-white h-64 flex justify-center items-center mt-10'>
        <img src={git} className='grayscale opacity-20 size-2/5 hover:opacity-60 transition-opacity ease-out duration-300'/>
        <img src={gh} className='grayscale opacity-20 size-2/5 hover:opacity-60 transition-opacity ease-out duration-300'/>
        <img src={vscode} className='grayscale opacity-20 size-2/5 hover:opacity-60 transition-opacity ease-out duration-300'/>
        <img src={docker} className='grayscale opacity-20 size-2/5 hover:opacity-60 transition-opacity ease-out duration-300'/>
        <img src={pycharm} className='grayscale opacity-20 size-2/5 hover:opacity-60 transition-opacity ease-out duration-300'/>

    </div>
  )
}

export default ToolsBar
