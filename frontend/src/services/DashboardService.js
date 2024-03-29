import React from 'react';
import Base from '../services/base';
export class DashboardService {
  constructor() {
    if (DashboardService._instance) {
      throw new Error("Singleton classes can't be instantiated more than once.")
    }
    DashboardService._instance = this;
    this.menuEvents = {};
  }
  
  setMenuEvent (editViewEvent, deleteViewEvent){
    this.menuEvents = {
      edit: editViewEvent,
      delete: deleteViewEvent
    }
  }

  getMenu() {
    return [{
      type: 'edit',
      event: this.menuEvents.edit,
      text: 'Edit',
      icon: 'edit-alt',
    }, {
      type: 'delete',
      event: this.menuEvents.delete,
      text: 'Delete',
      icon: 'minus-circle',
    }]
  }
}