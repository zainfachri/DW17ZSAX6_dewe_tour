import React, { Component } from 'react'

export default function SearchBar() {
    return (
        <div className="search">
            <label>Find great places to holiday</label><br/><br/>
            <input type="text"/>
            <button>Search</button>
        </div>
    )
}