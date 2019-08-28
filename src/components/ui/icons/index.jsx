import React from 'react';
import styled from 'styled-components';

export const Icon = styled.i`
  margin: 0px 10px 0px 5px;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`

export const TrashIcon = ({color = '#F7685B', width = '14px', height = '17px'}) => {
  return (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} fill={color} viewBox="0 0 14 17">
        <path
          fill={color}
          fillRule="evenodd"
          d="M4.773 0h4.09c.754 0 1.364.669 1.364 1.494v.747h2.046c.753 0 1.363.669 1.363 1.494v1.494c0 .825-.61 1.494-1.363 1.494h-.055l-.627 8.217c0 .825-.61 1.494-1.364 1.494H3.409c-.753 0-1.364-.67-1.361-1.432l-.63-8.28h-.054C.61 6.723 0 6.055 0 5.23V3.735c0-.825.61-1.494 1.364-1.494h2.045v-.747C3.41.669 4.02 0 4.773 0zM3.409 3.735H1.364v1.494h10.909V3.735H3.409zm7.44 2.988l-.62 8.155-.002.062H3.41l-.623-8.217h8.064zM8.865 1.494v.747H4.773v-.747h4.09z"
          clipRule="evenodd"
        />
      </svg>
    </Icon>
  );
}

export const PencilIcon = ({color = '#323C47', width = '15px', height = '15px'}) => {
  return (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} fill={color} viewBox="0 0 15 16">
        <path
          fill={color}
          fillRule="evenodd"
          d="M10.828.5c.491 0 .962.196 1.306.543l2.325 2.325a1.846 1.846 0 010 2.611l-8.49 8.489a3.037 3.037 0 01-2.118 1.034H0v-.75l.002-3.162c.064-.79.432-1.526.993-2.02l8.527-8.527A1.842 1.842 0 0110.828.5zm-7.03 13.504c.4-.029.774-.215 1.073-.558l5.671-5.671-2.815-2.816-5.705 5.703a1.553 1.553 0 00-.522.989v2.351l2.298.002zm4.99-10.106l2.815 2.816L13.4 4.92a.347.347 0 000-.49L11.07 2.1a.342.342 0 00-.486 0L8.788 3.898z"
          clipRule="evenodd"
        />
      </svg>
    </Icon>
  );
}

export const EmailIcon = ({color = '#323C47', width = '12px', height = '10px'}) => {
  return (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} fill={color} viewBox="0 0 12 10">
        <path
          fill={color}
          fillRule="evenodd"
          d="M1.09 0h9.82C11.511 0 12 .488 12 1.09v7.637a1.09 1.09 0 01-1.09 1.091H1.09A1.09 1.09 0 010 8.728V1.09C0 .488.488 0 1.09 0zm.001 3.61v5.117h9.818V3.61L6 6.065 1.091 3.61zm0-1.22l4.91 2.455 4.908-2.454v-1.3H1.091v1.3z"
          clipRule="evenodd"
        />
      </svg>
    </Icon>
  );
}

export const PhoneIcon = ({color = '#323C47', width = '12px', height = '12px'}) => {
  return (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} fill={color} viewBox="0 0 12 13">
        <path
          fill={color}
          fillRule="evenodd"
          d="M5.317 3.803c.31-.419.422-.86.07-1.25C4.6 1.45 4.069.766 3.736.438c-.633-.625-1.673-.54-2.221 0-.295.29-.394.389-.697.696C-.866 2.818.161 6.379 2.89 9.11c2.728 2.732 6.288 3.759 7.975 2.07.28-.268.515-.504.702-.701.537-.568.618-1.563-.004-2.209-.319-.331-.97-.836-2.12-1.66-.353-.314-.77-.246-1.153.005-.185.121-.319.243-.572.497l-.46.46c-.06.06-.882-.351-1.68-1.15-.8-.8-1.21-1.622-1.15-1.682l.46-.46.168-.172c.102-.107.187-.205.26-.305zm2.79 4.617l.46-.46c.138-.14.229-.225.302-.284 1.008.724 1.592 1.179 1.83 1.427.143.148.12.42-.004.551-.172.182-.395.406-.67.67-1.09 1.092-3.965.263-6.287-2.062-2.323-2.325-3.152-5.2-2.07-6.283.302-.305.397-.4.687-.687.109-.107.405-.13.537 0 .257.253.732.862 1.431 1.836a2.535 2.535 0 01-.136.153 7.98 7.98 0 01-.148.15l-.46.46c-.781.782-.115 2.113 1.15 3.38 1.264 1.265 2.596 1.932 3.377 1.15z"
          clipRule="evenodd"
        />
      </svg>
    </Icon>
  );
}

export const AddIcon = ({color = '#2ED47A', width = '12px', height = '12px'}) => {
  return (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} fill={color} viewBox="0 0 12 12">
         <path
           fill={color}
           fillRule="evenodd"
           d="M6 12A6 6 0 116 0a6 6 0 010 12zm0-1.091a4.91 4.91 0 100-9.818 4.91 4.91 0 000 9.818zm2.727-5.455H6.545V3.273h-1.09v2.181H3.272v1.091h2.181v2.182h1.091V6.545h2.182v-1.09z"
           clipRule="evenodd"
         />
       </svg>
    </Icon>
  );
}

export const SettingsIcon = ({color = '#323C47', width = '19px', height = '19px'}) => {
  return (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} fill={color} viewBox="0 0 19 19">
         <path
           fill={color}
           fillRule="evenodd"
           d="M14.713 16.58l1.848-1.847-.65-2.364.283-.677 2.14-1.207V7.872L16.2 6.66l-.279-.676.66-2.365-1.85-1.847-2.364.65-.676-.282L10.484 0H7.871L6.66 2.133l-.676.279-2.365-.66-1.846 1.846.65 2.365-.282.676L0 7.846v2.612l2.131 1.215.28.676-.66 2.365 1.847 1.847 2.365-.65.676.283 1.207 2.139h2.612l1.214-2.132.677-.279 2.364.659zm.164-6.059l-.726 1.736.546 1.984-.474.473-1.98-.551-1.736.716-1.018 1.787h-.67l-1.01-1.789-1.733-.726-1.985.546-.473-.473.552-1.98-.716-1.736L1.667 9.49v-.67l1.789-1.01.727-1.734-.547-1.985.472-.472 1.98.553 1.737-.717L8.84 1.667h.67l1.01 1.789 1.733.727 1.985-.547.474.474-.551 1.98.716 1.735 1.789 1.017v.67l-1.79 1.01zM9.167 12.5a3.333 3.333 0 110-6.667 3.333 3.333 0 010 6.667zm1.666-3.333a1.667 1.667 0 11-3.333 0 1.667 1.667 0 013.333 0z"
           clipRule="evenodd"
         />
       </svg>
    </Icon>
  );
}

export const ContactIcon = ({color = '#323C47', width = '16px', height = '16px'}) => {
  return (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} fill={color} viewBox="0 0 16 16">
        <path
          fill={color}
          fillRule="evenodd"
          d="M8 16A8 8 0 118 0a8 8 0 010 16zm5.382-4.273a6.545 6.545 0 10-10.763 0c.815-1.077 2.727-1.542 5.352-1.545-1.614-.014-2.88-1.159-2.88-3.636 0-1.633 1.149-2.91 2.91-2.91 1.755 0 2.909 1.398 2.909 3.055 0 2.37-1.28 3.477-2.88 3.49 2.624.004 4.536.469 5.352 1.546zm-1.044 1.175c-.213-.766-1.742-1.266-4.338-1.266s-4.125.5-4.338 1.266A6.52 6.52 0 008 14.546a6.52 6.52 0 004.338-1.644zM6.545 6.546c0 1.65.595 2.182 1.455 2.182.856 0 1.454-.51 1.454-2.037 0-.909-.57-1.6-1.454-1.6-.921 0-1.455.593-1.455 1.455z"
          clipRule="evenodd"
        />
      </svg>
    </Icon>
  );
}

export const CalendarIcon = ({color = '#fff', width = '15px', height = '15px'}) => {
  return (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} fill={color} viewBox="0 0 16 15">
        <path
          fill={color}
          fillRule="evenodd"
          d="M4.662 3h-1.51v-.75h-1.51V4.5h12.074V2.25h-1.509V3h-1.509v-.75H4.662V3zm9.054 3H1.643v7.5h12.073V6zM10.698.75H4.662V0h-1.51v.75H1.643C.81.75.134 1.42.134 2.25V13.5c0 .828.676 1.5 1.51 1.5h12.073c.833 0 1.509-.672 1.509-1.5V2.25c0-.829-.676-1.5-1.51-1.5h-1.509V0h-1.509v.75zM3.907 9V7.5h1.51V9h-1.51zm3.018 0h1.51V7.5h-1.51V9zm4.528 0H9.944V7.5h1.51V9zm-7.546 1.5V12h1.51v-1.5h-1.51zM8.434 12H6.925v-1.5h1.51V12z"
          clipRule="evenodd"
        />
      </svg>
    </Icon>
  );
}

export const FilterIcon = ({color = '#323C47', width = '22px', height = '20px'}) => {
  return (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} fill={color} viewBox="0 0 20 18">
        <path
          fill={color}
          fillRule="evenodd"
          d="M11 8a4.002 4.002 0 01-3.874-3H0V3h7.126A4.002 4.002 0 0115 4a4 4 0 01-4 4zm6-5h3v2h-3V3zM6 18a4.002 4.002 0 01-3.874-3H0v-2h2.126A4.002 4.002 0 0110 14a4 4 0 01-4 4zm6-3h8v-2h-8v2zm-4-1a2 2 0 11-4 0 2 2 0 014 0zm5-10a2 2 0 11-4 0 2 2 0 014 0z"
          clipRule="evenodd"
        />
      </svg>
    </Icon>
  );
}

export const ReportIcon = ({color = '#323C47', width = '24px', height = '20px'}) => {
  return (
    <Icon>
      <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} fill={color} viewBox="0 0 22 18">
        <path
          fill={color}
          fillRule="evenodd"
          d="M2 0h18a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm0 2v14h18V2H2zm4 12h2V8H6v6zm6 0h-2V4h2v10zm2 0h2V7h-2v7z"
          clipRule="evenodd"
        />
      </svg>
    </Icon>
  );
}
