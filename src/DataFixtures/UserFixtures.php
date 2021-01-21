<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    /** @var UserPasswordEncoderInterface */
    private $encoder;
    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setEmail('user@ex.com')
        ->setPassword($this->encoder->encodePassword($user, 'user'))
        ;
        $manager->persist($user);
        
        $admin = new User();
        $admin->setEmail('admin@ex.com')
        ->setPassword($this->encoder->encodePassword($admin, 'admin'))
        ->setRoles(['ROLE_ADMIN'])
        ;
        $manager->persist($admin);
        
        $manager->flush();
    }
}
