import React,{Component} from "react";

export function Alert({text}){
    return (
      <div class="alert alert-danger" role="alert">
        {text}
      </div>
    );
}
