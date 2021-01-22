<?php

namespace App\Events;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;

class JwtCreatedSubscriber 
{
    /**
     * ajouter des datas dans le token jwt.
     * Désactiver par défaut.
     * pour activer l'event il faut décommenter le service dans config/service
     *
     * @param JWTCreatedEvent $event
     * 
     * @return void
     */
    public function updateJwtData(JWTCreatedEvent $event)
    {
        $user = $event->getUser();
        $data = $event->getData();
        //add data
        // $data['key'] = 'value';
        $event->setData($data);
        // dd($event->getData());
    }
}