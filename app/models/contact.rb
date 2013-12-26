class Contact < ActiveRecord::Base
  after_commit :publish, :on => :create

  def publish
    $redis.publish('contacts.create', self.to_json)
  end
end
