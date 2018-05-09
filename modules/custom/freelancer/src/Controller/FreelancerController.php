<?php
/**
 * @file
 * Contains \Drupal\freelancer\Controller\Freelancer.
 */
namespace Drupal\freelancer\Controller;
class Freelancer {
  public function content() {
    return array(
      '#type' => 'markup',
      '#markup' => t('Hello, World!'),
    );
  }
}