import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
        <h1>PPRO - Semestrální práce</h1>
        <p>Účel aplikace:</p>
        <ul>
          <li>Nástroj pro správu plánů a záznamů o cvičení na hudební nástroj</li>
        </ul>
        <p>Typ aplikace:</p>
        <ul>
          <li>Vícevrstvá webová aplikace</li>
          <li>Server a klient bez stálého spojení (stateless)</li>
        </ul>
        <p>Použité technologie:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> a <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> - serverová část</li>
          <li><a href='https://facebook.github.io/react/'>React</a> - klientská část</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> - rozložení prvků a styly v klientské části</li>
        </ul>
        <p>Databázové entity:</p>
        <ul>
          <li><strong>Goals: </strong>cíle, kterých chce uživatel dosáhnout</li>
        </ul>
        <p>Zdrojové kódy:</p>
        <ul>
          <li><strong>Github: </strong><a href="https://github.com/ondroid1/my-practice-journal">https://github.com/ondroid1/my-practice-journal</a></li>
        </ul>
        <p>Nasazení aplikace:</p>
        <ul>
          <li><strong>Docker: </strong>...</li>
        </ul>
      </div>
    );
  }
}
